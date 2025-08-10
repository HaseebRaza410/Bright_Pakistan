import { Search, Menu, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const categories = [
    { name: "Tech", color: "news-tech" },
    { name: "Business", color: "news-business" },
    { name: "Global", color: "news-global" },
    { name: "Auto", color: "news-auto" },
    { name: "Startup", color: "news-startup" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-hero"></div>
              <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Bright Pakistan
              </h1>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search news..."
                className="w-64 pl-10"
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex h-12 items-center space-x-6 border-t">
          <Link to="/">
            <Button 
              variant="ghost" 
              className={`font-medium ${location.pathname === '/' ? 'text-primary' : ''}`}
            >
              Home
            </Button>
          </Link>
          <Link to="/categories">
            <Button 
              variant="ghost" 
              className={`font-medium hover:text-primary transition-fast ${location.pathname === '/categories' ? 'text-primary' : ''}`}
            >
              Categories
            </Button>
          </Link>
          <Link to="/about">
            <Button 
              variant="ghost" 
              className={`font-medium hover:text-primary transition-fast ${location.pathname === '/about' ? 'text-primary' : ''}`}
            >
              About
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              variant="ghost" 
              className={`font-medium hover:text-primary transition-fast ${location.pathname === '/contact' ? 'text-primary' : ''}`}
            >
              Contact
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;