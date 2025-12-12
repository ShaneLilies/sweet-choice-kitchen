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
      className="group relative overflow-hidden rounded-3xl bg-card shadow-warm transition-all duration-500 hover:-translate-y-3 hover:shadow-warm-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/50 animate-scale-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Decorative glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" />
      
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/90 via-chocolate/30 to-transparent" />
      </div>
      
      {/* Floating emoji */}
      <div className="absolute top-4 right-4 z-20">
        <span className="text-3xl drop-shadow-lg transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 inline-block">
          {category.emoji}
        </span>
      </div>
      
      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-left z-20">
        <h3 className="font-display text-2xl font-bold text-primary-foreground drop-shadow-md mb-1">
          {category.name}
        </h3>
        <p className="text-sm text-primary-foreground/85 line-clamp-2 leading-relaxed">
          {category.description}
        </p>
        <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-honey opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
          <span>View recipes</span>
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
      
      {/* Corner ribbon effect */}
      <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
        <div className="absolute -left-8 top-4 w-24 h-6 bg-gradient-to-r from-secondary to-primary rotate-[-45deg] opacity-0 transition-opacity duration-300 group-hover:opacity-90" />
      </div>
    </button>
  );
};

export default CategoryCard;