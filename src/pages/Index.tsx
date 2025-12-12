import { useState } from "react";
import { dessertCategories, DessertCategory, DessertType } from "@/data/desserts";
import CategoryCard from "@/components/CategoryCard";
import TypeCard from "@/components/TypeCard";
import RecipeView from "@/components/RecipeView";
import Breadcrumbs from "@/components/Breadcrumbs";
import ChatBot from "@/components/ChatBot";

type View = "categories" | "types" | "recipe";

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl">🧁</span>
            <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Sweet Recipes
            </h1>
          </div>
          <p className="mt-2 text-center text-muted-foreground">
            Discover delicious dessert recipes to satisfy your sweet tooth
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {view !== "categories" && <Breadcrumbs items={getBreadcrumbs()} />}

        {/* Categories View */}
        {view === "categories" && (
          <div className="animate-fade-in">
            <h2 className="mb-8 text-center font-display text-2xl font-semibold text-foreground md:text-3xl">
              What would you like to make?
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
            <div className="mb-8 text-center">
              <span className="mb-2 inline-block text-5xl">{selectedCategory.emoji}</span>
              <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                Choose your {selectedCategory.name.toLowerCase()}
              </h2>
            </div>
            <div className="mx-auto max-w-2xl space-y-3">
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
      <footer className="border-t border-border bg-card/50 py-6">
        <p className="text-center text-sm text-muted-foreground">
          Made with 💖 for dessert lovers everywhere
        </p>
      </footer>

      {/* AI ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Index;
