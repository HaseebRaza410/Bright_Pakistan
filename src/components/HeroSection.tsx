import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowRight } from "lucide-react";
import heroStartup from "@/assets/hero-startup.jpg";

const HeroSection = () => {
  const featuredArticle = {
    id: 1,
    title: "Pakistan's Tech Revolution: AI Innovation Leads Digital Transformation",
    excerpt: "Breakthrough artificial intelligence developments are positioning Pakistan as a major player in the global tech landscape, with local innovations gaining international recognition.",
    author: "Sarah Ahmed",
    readTime: "5 min read",
    publishDate: "2 hours ago",
    category: "Technology",
    image: heroStartup
  };

  return (
    <section className="relative py-12 bg-gradient-to-br from-primary-light to-accent-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Badge className="bg-news-startup text-white">
                Breaking News
              </Badge>
              <span className="text-sm text-muted-foreground">Featured Story</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              {featuredArticle.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {featuredArticle.excerpt}
            </p>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{featuredArticle.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{featuredArticle.readTime}</span>
              </div>
              <span>{featuredArticle.publishDate}</span>
            </div>

            <div className="flex space-x-4">
              <Button variant="hero" size="lg">
                Read Full Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Share Article
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-video rounded-lg bg-gradient-card shadow-card-hover overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;