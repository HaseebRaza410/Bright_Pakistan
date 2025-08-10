import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import techImage from "@/assets/tech-innovation.jpg";
import businessImage from "@/assets/business-conference.jpg";
import autoImage from "@/assets/electric-vehicle.jpg";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", color: "primary", count: 156 },
    { name: "Technology", color: "news-tech", count: 45 },
    { name: "Business", color: "news-business", count: 38 },
    { name: "Startups", color: "news-startup", count: 32 },
    { name: "Global", color: "news-global", count: 28 },
    { name: "Automotive", color: "news-auto", count: 13 }
  ];

  const mockArticles = [
    {
      id: 1,
      title: "Revolutionary AI Platform Transforms Pakistani Healthcare",
      excerpt: "A breakthrough AI platform developed by Pakistani engineers is revolutionizing healthcare delivery across rural areas.",
      author: "Dr. Ayesha Khan",
      readTime: "4 min read",
      publishDate: "2 hours ago",
      category: "Technology",
      image: techImage
    },
    {
      id: 2,
      title: "Pakistani Fintech Startup Raises $25M Series B",
      excerpt: "Leading digital banking platform secures major funding round to expand across South Asia.",
      author: "Ahmed Hassan",
      readTime: "3 min read",
      publishDate: "4 hours ago",
      category: "Business",
      image: businessImage
    },
    {
      id: 3,
      title: "Electric Vehicle Manufacturing Hub Opens in Lahore",
      excerpt: "Pakistan's largest EV manufacturing facility begins operations, marking a significant step toward sustainable transportation.",
      author: "Maria Khan",
      readTime: "5 min read",
      publishDate: "6 hours ago",
      category: "Automotive",
      image: autoImage
    }
  ];

  const filteredArticles = activeCategory === "All" 
    ? mockArticles 
    : mockArticles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge className="mb-4" variant="outline">Browse Categories</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Explore by <span className="bg-gradient-hero bg-clip-text text-transparent">Category</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the latest news and insights across different sectors shaping Pakistan's future.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant={activeCategory === category.name ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.name)}
                    className="flex items-center space-x-2"
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="ml-2">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Articles Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              {activeCategory === "All" ? "All Articles" : `${activeCategory} Articles`}
            </h2>
            <p className="text-muted-foreground">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;