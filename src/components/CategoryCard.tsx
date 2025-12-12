import { DessertCategory } from "@/data/desserts";

interface CategoryCardProps {
  category: DessertCategory;
  onClick: () => void;
  index: number;
}

const CategoryCard = ({ category, onClick, index }: CategoryCardProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-warm transition-all duration-300 hover:-translate-y-2 hover:shadow-warm-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <span className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">
          {category.emoji}
        </span>
        <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
          {category.name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {category.description}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Explore
          <svg
            className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </button>
  );
};

export default CategoryCard;
