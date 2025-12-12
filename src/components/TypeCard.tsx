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
      className="group relative overflow-hidden rounded-xl bg-card p-5 shadow-warm transition-all duration-300 hover:-translate-y-1 hover:shadow-warm-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-4">
        <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
          {type.emoji}
        </span>
        <div className="text-left">
          <h4 className="font-display text-lg font-medium text-foreground">
            {type.name}
          </h4>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {type.recipe.description}
          </p>
        </div>
        <svg
          className="ml-auto h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary group-hover:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

export default TypeCard;
