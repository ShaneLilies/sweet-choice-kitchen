import { Recipe } from "@/data/desserts";

interface RecipeViewProps {
  recipe: Recipe;
  emoji: string;
}

const RecipeView = ({ recipe, emoji }: RecipeViewProps) => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-8 text-center">
        <span className="mb-4 inline-block text-6xl">{emoji}</span>
        <h2 className="mb-2 font-display text-3xl font-bold text-foreground md:text-4xl">
          {recipe.name}
        </h2>
        <p className="text-lg text-muted-foreground">{recipe.description}</p>
      </div>

      {/* Info Cards */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        <div className="rounded-xl bg-card p-4 text-center shadow-warm">
          <span className="mb-1 block text-2xl">⏱️</span>
          <p className="text-xs text-muted-foreground">Prep Time</p>
          <p className="font-medium text-foreground">{recipe.prepTime}</p>
        </div>
        <div className="rounded-xl bg-card p-4 text-center shadow-warm">
          <span className="mb-1 block text-2xl">🍳</span>
          <p className="text-xs text-muted-foreground">Cook Time</p>
          <p className="font-medium text-foreground">{recipe.cookTime}</p>
        </div>
        <div className="rounded-xl bg-card p-4 text-center shadow-warm">
          <span className="mb-1 block text-2xl">🍽️</span>
          <p className="text-xs text-muted-foreground">Servings</p>
          <p className="font-medium text-foreground">{recipe.servings}</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Ingredients */}
        <div className="rounded-2xl bg-card p-6 shadow-warm">
          <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold text-foreground">
            <span>🧺</span> Ingredients
          </h3>
          <ul className="space-y-3">
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-foreground"
              >
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div className="rounded-2xl bg-card p-6 shadow-warm">
          <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold text-foreground">
            <span>📝</span> Instructions
          </h3>
          <ol className="space-y-4">
            {recipe.steps.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <p className="pt-0.5 text-foreground">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeView;
