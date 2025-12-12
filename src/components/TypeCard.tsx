import { DessertType } from "@/data/desserts";

interface TypeCardProps {
  type: DessertType;
  onClick: () => void;
  index: number;
}

const TypeCard = ({ type, onClick, index }: TypeCardProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-warm transition-all duration-500 hover:-translate-y-2 hover:shadow-warm-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 animate-slide-up border border-border/30 hover:border-primary/30"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Inner glow effect */}
      <div className="absolute inset-0 shadow-inner-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex items-center gap-5">
        {/* Emoji container with background */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-frosting/30 to-honey/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cream to-muted transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <span className="text-4xl transition-transform duration-500 group-hover:scale-110">
              {type.emoji}
            </span>
          </div>
        </div>
        
        <div className="text-left flex-1">
          <h4 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {type.name}
          </h4>
          <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
            {type.recipe.description}
          </p>
          
          {/* Recipe meta info */}
          <div className="flex gap-3 mt-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <span>⏱️</span> {type.recipe.prepTime}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <span>🍽️</span> {type.recipe.servings}
            </span>
          </div>
        </div>
        
        {/* Arrow indicator */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 transition-all duration-500 group-hover:bg-primary group-hover:scale-110">
          <svg
            className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default TypeCard;
