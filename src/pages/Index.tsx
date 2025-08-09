import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import TrendingSection from "@/components/TrendingSection";
import Footer from "@/components/Footer";
import heroStartup from "@/assets/hero-startup.jpg";
import techInnovation from "@/assets/tech-innovation.jpg";
import electricVehicle from "@/assets/electric-vehicle.jpg";
import businessConference from "@/assets/business-conference.jpg";

const Index = () => {
  // Sample news data
  const techArticles = [
    {
      id: 1,
      title: "Pakistani AI Startup Raises $15M in Series A Funding",
      excerpt: "Revolutionary machine learning platform gains international recognition and secures major investment from Silicon Valley venture capital firm.",
      author: "Ahmed Hassan",
      readTime: "4 min read",
      publishDate: "2 hours ago",
      category: "Tech",
      image: techInnovation,
      comments: 24
    },
    {
      id: 2,
      title: "Karachi Tech Hub Announces Major Expansion Plans",
      excerpt: "New 50,000 sq ft facility will house over 100 startups and create thousands of tech jobs in the region.",
      author: "Fatima Khan",
      readTime: "3 min read",
      publishDate: "4 hours ago",
      category: "Tech",
      image: businessConference,
      comments: 18
    },
    {
      id: 3,
      title: "Blockchain Innovation Center Opens in Lahore",
      excerpt: "Pakistan's first dedicated blockchain research facility aims to position the country as a leader in distributed ledger technology.",
      author: "Omar Ali",
      readTime: "5 min read",
      publishDate: "6 hours ago",
      category: "Tech",
      image: heroStartup,
      comments: 31
    }
  ];

  const businessArticles = [
    {
      id: 4,
      title: "E-commerce Sales Surge 45% in Pakistan This Quarter",
      excerpt: "Record-breaking growth in online retail sector driven by improved digital payment systems and expanding internet infrastructure.",
      author: "Ayesha Rahman",
      readTime: "3 min read",
      publishDate: "1 hour ago",
      category: "Business",
      image: businessConference,
      comments: 15
    },
    {
      id: 5,
      title: "Foreign Investment in Pakistani Startups Reaches All-Time High",
      excerpt: "International investors show increasing confidence in Pakistan's startup ecosystem with $200M+ invested this year.",
      author: "Hassan Malik",
      readTime: "4 min read",
      publishDate: "3 hours ago",
      category: "Business",
      image: techInnovation,
      comments: 27
    },
    {
      id: 6,
      title: "New Trade Agreement Boosts Tech Exports by 30%",
      excerpt: "Bilateral technology trade deal opens new markets for Pakistani software and IT services companies.",
      author: "Zara Ahmed",
      readTime: "2 min read",
      publishDate: "5 hours ago",
      category: "Business",
      image: heroStartup,
      comments: 12
    }
  ];

  const autoArticles = [
    {
      id: 7,
      title: "First Electric Vehicle Assembly Plant Inaugurated in Karachi",
      excerpt: "State-of-the-art facility will produce 10,000 electric vehicles annually, marking Pakistan's entry into sustainable transportation.",
      author: "Muhammad Tariq",
      readTime: "6 min read",
      publishDate: "30 minutes ago",
      category: "Auto",
      image: electricVehicle,
      comments: 42
    },
    {
      id: 8,
      title: "Government Announces EV Incentive Program",
      excerpt: "New policy offers tax breaks and subsidies to accelerate electric vehicle adoption across the country.",
      author: "Saira Butt",
      readTime: "3 min read",
      publishDate: "2 hours ago",
      category: "Auto",
      image: businessConference,
      comments: 19
    },
    {
      id: 9,
      title: "Local Auto Parts Manufacturer Wins International Contract",
      excerpt: "Pakistani company secures $50M deal to supply components to major global automotive manufacturer.",
      author: "Imran Sheikh",
      readTime: "4 min read",
      publishDate: "4 hours ago",
      category: "Auto",
      image: techInnovation,
      comments: 8
    }
  ];

  const categories = [
    {
      name: "Technology",
      color: "news-tech",
      description: "Latest innovations and tech developments in Pakistan"
    },
    {
      name: "Business",
      color: "news-business", 
      description: "Market trends, investments, and economic updates"
    },
    {
      name: "Automotive",
      color: "news-auto",
      description: "Vehicle industry news and transportation innovations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-12">
              <CategorySection 
                category={categories[0]} 
                articles={techArticles} 
              />
              <CategorySection 
                category={categories[1]} 
                articles={businessArticles} 
              />
              <CategorySection 
                category={categories[2]} 
                articles={autoArticles} 
              />
            </div>
            
            <div className="lg:col-span-1">
              <TrendingSection />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
