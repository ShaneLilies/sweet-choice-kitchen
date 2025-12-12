import { Recipe } from "@/data/desserts";

interface RecipeViewProps {
  recipe: Recipe;
  emoji: string;
}

const RecipeView = ({ recipe, emoji }: RecipeViewProps) => {
  return (
    <div className="animate-fade-in">
      {/* Header with decorative elements */}
      <div className="relative mb-10 text-center">
        {/* Floating decorative elements */}
        <div className="absolute -top-4 left-1/4 text-2xl opacity-30 animate-float">✨</div>
        <div className="absolute -top-2 right-1/4 text-2xl opacity-30 animate-float-delayed">🌟</div>
        
        <span className="mb-4 inline-block text-7xl animate-pulse-soft drop-shadow-lg">{emoji}</span>
        <h2 className="mb-3 font-display text-4xl font-bold text-foreground md:text-5xl">
          <span className="text-gradient">{recipe.name}</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">{recipe.description}</p>
      </div>

      {/* Info Cards */}
      <div className="mb-10 grid grid-cols-3 gap-4 md:gap-6">
        {[
          { icon: "⏱️", label: "Prep Time", value: recipe.prepTime },
          { icon: "🍳", label: "Cook Time", value: recipe.cookTime },
          { icon: "🍽️", label: "Servings", value: recipe.servings },
        ].map((item, index) => (
          <div 
            key={item.label}
            className="group rounded-2xl bg-card p-5 text-center shadow-warm transition-all duration-500 hover:-translate-y-2 hover:shadow-warm-lg border border-border/30 hover:border-primary/30 animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="mb-2 block text-3xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">{item.icon}</span>
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{item.label}</p>
            <p className="font-display font-semibold text-foreground text-lg mt-1">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Ingredients */}
        <div className="rounded-3xl bg-card p-7 shadow-warm border border-border/30 hover:border-secondary/30 transition-all duration-500 hover:shadow-warm-lg animate-slide-up">
          <h3 className="mb-5 flex items-center gap-3 font-display text-2xl font-semibold text-foreground">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-xl">🧺</span>
            <span>Ingredients</span>
          </h3>
          <ul className="space-y-3">
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-foreground group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-secondary to-coral transition-transform duration-300 group-hover:scale-150" />
                <span className="transition-colors duration-300 group-hover:text-secondary">{ingredient}</span>
              </li>
            ))}
          </ul>
          
          {/* Decorative corner */}
          <div className="absolute -bottom-2 -right-2 text-4xl opacity-10 rotate-12">🥄</div>
        </div>

        {/* Steps */}
        <div className="rounded-3xl bg-card p-7 shadow-warm border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-warm-lg animate-slide-up" style={{ animationDelay: '100ms' }}>
          <h3 className="mb-5 flex items-center gap-3 font-display text-2xl font-semibold text-foreground">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xl">📝</span>
            <span>Instructions</span>
          </h3>
          <ol className="space-y-5">
            {recipe.steps.map((step, index) => (
              <li 
                key={index} 
                className="flex gap-4 group animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cinnamon text-sm font-bold text-primary-foreground shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                  {index + 1}
                </span>
                <p className="pt-1 text-foreground leading-relaxed transition-colors duration-300 group-hover:text-primary/90">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Completion message */}
      <div className="mt-10 text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
        <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 px-6 py-3 border border-primary/20">
          <span className="text-2xl">🎉</span>
          <p className="font-script text-xl text-foreground">Enjoy your delicious creation!</p>
          <span className="text-2xl">🎉</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeView;