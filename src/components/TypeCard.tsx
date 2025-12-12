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
      className="group relative overflow-hidden rounded-2xl bg-card shadow-warm transition-all duration-500 hover:-translate-y-2 hover:shadow-warm-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 animate-slide-up border border-border/30 hover:border-primary/30"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image section */}
      <div className="relative h-40 w-full overflow-hidden">
        <img 
          src={type.image} 
          alt={type.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        
        {/* Emoji badge */}
        <div className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm shadow-warm border border-border/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
          <span className="text-xl">{type.emoji}</span>
        </div>
        
        {/* Floating glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      
      {/* Content section */}
      <div className="relative p-4">
        {/* Inner glow effect */}
        <div className="absolute inset-0 shadow-inner-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex items-center justify-between gap-3">
          <div className="text-left flex-1 min-w-0">
            <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
              {type.name}
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-1 mt-0.5">
              {type.recipe.description}
            </p>
            
            {/* Recipe meta info */}
            <div className="flex gap-3 mt-2">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <span>⏱️</span> {type.recipe.prepTime}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <span>🍽️</span> {type.recipe.servings}
              </span>
            </div>
          </div>
          
          {/* Arrow indicator */}
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-muted/50 transition-all duration-500 group-hover:bg-primary group-hover:scale-110">
            <svg
              className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
};

export default TypeCard;
