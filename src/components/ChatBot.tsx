import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { dessertCategories } from '@/data/desserts';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Generate dessert knowledge for the chatbot
const generateDessertKnowledge = () => {
  const easyDesserts: string[] = [];
  const allRecipes: { name: string; category: string; prepTime: string; cookTime: string }[] = [];
  
  dessertCategories.forEach(category => {
    category.types.forEach(type => {
      const prepMins = parseInt(type.recipe.prepTime) || 30;
      const cookMins = parseInt(type.recipe.cookTime) || 30;
      const totalTime = prepMins + cookMins;
      
      allRecipes.push({
        name: type.recipe.name,
        category: category.name,
        prepTime: type.recipe.prepTime,
        cookTime: type.recipe.cookTime
      });
      
      if (totalTime <= 30) {
        easyDesserts.push(`${type.recipe.name} (${category.name}) - Ready in about ${totalTime} mins`);
      }
    });
  });
  
  return { easyDesserts, allRecipes };
};

const { easyDesserts, allRecipes } = generateDessertKnowledge();

const quickSuggestions = [
  "What's the easiest dessert to make?",
  "Suggest a chocolate dessert",
  "What can I bake in 30 minutes?",
  "Best dessert for beginners?"
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: `Hi there! 🧁 I'm your Sweet Recipes assistant! I know all about the ${allRecipes.length} delicious desserts on this site. Ask me anything like:\n\n• "What's the easiest dessert to make?"\n• "Suggest something with chocolate"\n• "What can I bake quickly?"\n\nLet me help you find your perfect treat!` 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (messageText?: string) => {
    const userMessage = messageText || input.trim();
    if (!userMessage || isLoading) return;

    setInput('');
    setShowSuggestions(false);
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Build context about our desserts for the AI
    const dessertContext = `
You are a friendly dessert recipe assistant for the Sweet Recipes website. You have knowledge of these desserts available on the site:

AVAILABLE DESSERT CATEGORIES:
${dessertCategories.map(c => `- ${c.name} (${c.emoji}): ${c.types.map(t => t.recipe.name).join(', ')}`).join('\n')}

EASY/QUICK DESSERTS (under 30 mins total):
${easyDesserts.length > 0 ? easyDesserts.join('\n') : 'Chocolate Chip Cookies, Sugar Cookies, Snickerdoodles - all quick options!'}

BEGINNER-FRIENDLY DESSERTS:
- Classic Chocolate Chip Cookies (Cookies) - Simple, no special equipment needed
- Soft Sugar Cookies (Cookies) - Easy to make and fun to decorate  
- Classic Snickerdoodles (Cookies) - Just roll in cinnamon sugar
- Chocolate Brownies (Brownies) - Mix and bake, very forgiving
- Mochi (Asian Desserts) - Just a few ingredients

When users ask about desserts, ALWAYS suggest items from the list above. Be enthusiastic about desserts! Use dessert emojis occasionally. Keep responses concise but helpful. If they ask for something not on the site, acknowledge it and suggest a similar option from our menu.
`;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_FLOWISE_API_URL}/api/v1/prediction/${import.meta.env.VITE_FLOWISE_CHATFLOW_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_FLOWISE_API_KEY}`,
          },
          body: JSON.stringify({ 
            question: userMessage,
            overrideConfig: {
              systemMessage: dessertContext
            }
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.text || data.answer || 'Sorry, I couldn\'t process that. Try asking about our dessert recipes!' }]);
    } catch (error) {
      console.error('Chat error:', error);
      // Provide a helpful fallback response based on the question
      let fallbackResponse = "I'm having trouble connecting right now, but I can still help! 🍰\n\n";
      
      const lowerMessage = userMessage.toLowerCase();
      if (lowerMessage.includes('easy') || lowerMessage.includes('simple') || lowerMessage.includes('beginner')) {
        fallbackResponse += "For easy desserts, I'd recommend:\n• **Chocolate Chip Cookies** - classic and foolproof!\n• **Snickerdoodles** - just roll in cinnamon sugar\n• **Brownies** - mix and bake, so simple!\n\nCheck out our Cookies or Brownies section!";
      } else if (lowerMessage.includes('chocolate')) {
        fallbackResponse += "For chocolate lovers, try:\n• **Classic Chocolate Cake** 🍫\n• **Chocolate Chip Cookies**\n• **Chocolate Brownies**\n• **Chocolate Ice Cream**\n\nBrowse our Cakes or Brownies sections!";
      } else if (lowerMessage.includes('quick') || lowerMessage.includes('fast') || lowerMessage.includes('30 min')) {
        fallbackResponse += "Quick desserts under 30 minutes:\n• **Cookies** - most are ready in 25 mins!\n• **Mochi** - quick Asian treat\n• **Pudding** - fast and delicious\n\nCheck our Cookies section for speed!";
      } else {
        fallbackResponse += "Browse our categories above to find:\n• 🎂 Cakes for celebrations\n• 🍪 Cookies for quick treats\n• 🥧 Pies for classic comfort\n• 🍨 Ice Cream for hot days\n\nWhat type of dessert are you craving?";
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: fallbackResponse }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-warm-lg hover:shadow-glow transition-all duration-500 flex items-center justify-center group hover:scale-110"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-7 h-7" />
            <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-honey animate-pulse" />
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[520px] bg-card border border-border/50 rounded-3xl shadow-warm-xl flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-2 right-4 text-2xl animate-float">🧁</div>
              <div className="absolute bottom-2 left-4 text-xl animate-float-delayed">🍪</div>
            </div>
            <div className="relative">
              <h3 className="font-display text-xl font-bold flex items-center gap-2">
                <span>🍰</span> Dessert Assistant
              </h3>
              <p className="text-sm opacity-90 mt-1">Ask me about recipes & sweet tips!</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-muted/30">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-br-sm shadow-warm'
                      : 'bg-card text-foreground rounded-bl-sm shadow-warm border border-border/30'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-card p-4 rounded-2xl rounded-bl-sm shadow-warm border border-border/30">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin text-primary" />
                    <span className="text-sm text-muted-foreground">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {showSuggestions && messages.length <= 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickSuggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors duration-200 border border-secondary/20"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border/50 bg-card">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about desserts... 🍩"
                className="flex-1 px-4 py-3 rounded-2xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all duration-200"
                disabled={isLoading}
              />
              <Button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="rounded-2xl w-12 h-12 bg-gradient-to-br from-primary to-secondary hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;