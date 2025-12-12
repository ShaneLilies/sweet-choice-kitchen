import { useState } from "react";
import { dessertCategories, DessertCategory, DessertType } from "@/data/desserts";
import CategoryCard from "@/components/CategoryCard";
import TypeCard from "@/components/TypeCard";
import RecipeView from "@/components/RecipeView";
import Breadcrumbs from "@/components/Breadcrumbs";
import ChatBot from "@/components/ChatBot";

type View = "categories" | "types" | "recipe";

const floatingEmojis = ["🍰", "🧁", "🍪", "🍩", "🎂", "🍫", "🍦", "🥧"];

const Index = () => {
  const [view, setView] = useState<View>("categories");
  const [selectedCategory, setSelectedCategory] = useState<DessertCategory | null>(null);
  const [selectedType, setSelectedType] = useState<DessertType | null>(null);

  const handleCategoryClick = (category: DessertCategory) => {
    setSelectedCategory(category);
    setView("types");
  };

  const handleTypeClick = (type: DessertType) => {
    setSelectedType(type);
    setView("recipe");
  };

  const handleBackToCategories = () => {
    setView("categories");
    setSelectedCategory(null);
    setSelectedType(null);
  };

  const handleBackToTypes = () => {
    setView("types");
    setSelectedType(null);
  };

  const getBreadcrumbs = (): { label: string; onClick?: () => void }[] => {
    const items: { label: string; onClick?: () => void }[] = [
      { label: "🏠 Desserts", onClick: handleBackToCategories }
    ];
    
    if (selectedCategory && (view === "types" || view === "recipe")) {
      items.push({
        label: `${selectedCategory.emoji} ${selectedCategory.name}`,
        ...(view === "recipe" ? { onClick: handleBackToTypes } : {}),
      });
    }
    
    if (selectedType && view === "recipe") {
      items.push({
        label: `${selectedType.emoji} ${selectedType.name}`,
      });
    }
    
    return items;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 decorative-pattern pointer-events-none" />
      <div className="fixed inset-0 decorative-dots pointer-events-none opacity-50" />
      
      {/* Floating emojis */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingEmojis.map((emoji, i) => (
          <span
            key={i}
            className="absolute text-3xl opacity-20 animate-float"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3)}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 glass-warm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <span className="text-5xl animate-wiggle">🧁</span>
              <div className="text-center">
                <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                  <span className="text-gradient">Sweet</span> Recipes
                </h1>
                <p className="font-script text-xl text-secondary md:text-2xl">
                  Indulge your cravings
                </p>
              </div>
              <span className="text-5xl animate-wiggle" style={{ animationDelay: '0.5s' }}>🍰</span>
            </div>
            <p className="mt-3 text-center text-muted-foreground max-w-md">
              Discover delicious dessert recipes that will make your taste buds dance
            </p>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute -bottom-1 left-0 right-0 h-4 overflow-hidden">
          <svg viewBox="0 0 1200 30" className="w-full h-full fill-background" preserveAspectRatio="none">
            <path d="M0,30 C200,10 400,20 600,15 C800,10 1000,25 1200,10 L1200,30 L0,30 Z" />
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-10">
        {view !== "categories" && <Breadcrumbs items={getBreadcrumbs()} />}

        {/* Categories View */}
        {view === "categories" && (
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                ✨ Explore our collection
              </span>
              <h2 className="font-display text-2xl font-semibold text-foreground md:text-4xl mb-2">
                What would you like to <span className="text-gradient">make</span>?
              </h2>
              <p className="text-muted-foreground">
                Choose a category and let the sweetness begin
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {dessertCategories.map((category, index) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onClick={() => handleCategoryClick(category)}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Types View */}
        {view === "types" && selectedCategory && (
          <div className="animate-fade-in">
            <div className="mb-10 text-center">
              <span className="mb-4 inline-block text-6xl animate-pulse-soft">{selectedCategory.emoji}</span>
              <h2 className="font-display text-2xl font-semibold text-foreground md:text-4xl mb-2">
                Choose your <span className="text-gradient">{selectedCategory.name.toLowerCase()}</span>
              </h2>
              <p className="text-muted-foreground">
                Each recipe is crafted with love and deliciousness
              </p>
            </div>
            <div className="mx-auto max-w-2xl space-y-4">
              {selectedCategory.types.map((type, index) => (
                <TypeCard
                  key={type.id}
                  type={type}
                  onClick={() => handleTypeClick(type)}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Recipe View */}
        {view === "recipe" && selectedType && (
          <div className="mx-auto max-w-4xl">
            <RecipeView recipe={selectedType.recipe} emoji={selectedType.emoji} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 glass-warm py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2 text-2xl">
              <span className="animate-wiggle">🍪</span>
              <span className="animate-wiggle" style={{ animationDelay: '0.2s' }}>🍰</span>
              <span className="animate-wiggle" style={{ animationDelay: '0.4s' }}>🧁</span>
            </div>
            <p className="text-center text-muted-foreground font-medium">
              Made with <span className="text-secondary">💖</span> for dessert lovers everywhere
            </p>
            <p className="text-xs text-muted-foreground/70">
              Bake something sweet today!
            </p>
          </div>
        </div>
      </footer>

      {/* AI ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Index;