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
      className="group relative overflow-hidden rounded-2xl bg-card shadow-warm transition-all duration-300 hover:-translate-y-2 hover:shadow-warm-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      
      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">{category.emoji}</span>
          <h3 className="font-display text-xl font-semibold text-white">
            {category.name}
          </h3>
        </div>
        <p className="text-sm text-white/80 line-clamp-2">
          {category.description}
        </p>
        <span className="mt-2 inline-flex items-center text-sm font-medium text-white/90 opacity-0 transition-all duration-300 group-hover:opacity-100">
          Explore recipes
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