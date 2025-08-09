import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, User } from "lucide-react";

const TrendingSection = () => {
  const trendingArticles = [
    {
      id: 1,
      title: "Pakistani Fintech Startup Secures Major Investment from Silicon Valley",
      author: "Ahmad Khan",
      publishDate: "3 hours ago",
      category: "Fintech",
      rank: 1
    },
    {
      id: 2,
      title: "New Electric Vehicle Manufacturing Plant Opens in Karachi",
      author: "Fatima Sheikh",
      publishDate: "5 hours ago",
      category: "Auto",
      rank: 2
    },
    {
      id: 3,
      title: "Tech Giants Announce Major Expansion Plans in Pakistan",
      author: "Hassan Ali",
      publishDate: "6 hours ago",
      category: "Tech",
      rank: 3
    },
    {
      id: 4,
      title: "E-commerce Growth Reaches Record High in Q4",
      author: "Ayesha Rahman",
      publishDate: "8 hours ago",
      category: "Business",
      rank: 4
    },
    {
      id: 5,
      title: "Government Launches New Digital Innovation Hub",
      author: "Omar Malik",
      publishDate: "12 hours ago",
      category: "Government",
      rank: 5
    }
  ];

  return (
    <aside className="sticky top-20">
      <div className="bg-card rounded-lg shadow-card p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="h-5 w-5 text-accent" />
          <h3 className="font-semibold">Trending Now</h3>
        </div>

        <div className="space-y-4">
          {trendingArticles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-accent">
                      {article.rank}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                  <div className="flex items-center space-x-3 mt-1 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.publishDate}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {article.category}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default TrendingSection;