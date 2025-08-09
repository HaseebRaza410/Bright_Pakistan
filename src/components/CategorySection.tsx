import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import NewsCard from "./NewsCard";

interface CategorySectionProps {
  category: {
    name: string;
    color: string;
    description: string;
  };
  articles: Array<{
    id: number;
    title: string;
    excerpt: string;
    author: string;
    readTime: string;
    publishDate: string;
    category: string;
    image: string;
    comments?: number;
  }>;
}

const CategorySection = ({ category, articles }: CategorySectionProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Badge 
              className="text-white text-sm px-3 py-1"
              style={{ backgroundColor: `hsl(var(--${category.color}))` }}
            >
              {category.name}
            </Badge>
            <div>
              <h2 className="text-2xl font-bold">{category.name} News</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline">
            View All {category.name} News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;