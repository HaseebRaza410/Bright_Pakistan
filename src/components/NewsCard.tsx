import { Badge } from "@/components/ui/badge";
import { Clock, User, MessageCircle, Share2, BookmarkPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsCardProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    readTime: string;
    publishDate: string;
    category: string;
    image: string;
    comments?: number;
  };
  featured?: boolean;
}

const NewsCard = ({ article, featured = false }: NewsCardProps) => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      tech: "news-tech",
      business: "news-business",
      auto: "news-auto",
      global: "news-global",
      startup: "news-startup"
    };
    return colors[category.toLowerCase()] || "primary";
  };

  if (featured) {
    return (
      <article className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
          <div className="aspect-video">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <Badge 
                className="mb-2" 
                style={{ backgroundColor: `hsl(var(--${getCategoryColor(article.category)}))` }}
              >
                {article.category}
              </Badge>
              <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                {article.title}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-white/80">
                <div className="flex items-center space-x-1">
                  <User className="h-3 w-3" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group cursor-pointer">
      <div className="bg-card rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
        <div className="aspect-video">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge 
              variant="outline"
              style={{ borderColor: `hsl(var(--${getCategoryColor(article.category)}))`, color: `hsl(var(--${getCategoryColor(article.category)}))` }}
            >
              {article.category}
            </Badge>
            <span className="text-xs text-muted-foreground">{article.publishDate}</span>
          </div>
          
          <h3 className="font-semibold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <User className="h-3 w-3" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{article.readTime}</span>
              </div>
              {article.comments && (
                <div className="flex items-center space-x-1">
                  <MessageCircle className="h-3 w-3" />
                  <span>{article.comments}</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="sm">
                <Share2 className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm">
                <BookmarkPlus className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;