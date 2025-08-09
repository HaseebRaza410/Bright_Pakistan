import { Search, Menu, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-hero"></div>
              <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Startup Pakistan
              </h1>
            </div>
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
          <Button variant="ghost" className="font-medium">
            Home
          </Button>
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className="font-medium hover:text-primary transition-fast"
            >
              {category.name}
            </Button>
          ))}
          <Button variant="ghost" className="font-medium">
            Latest
          </Button>
          <Button variant="ghost" className="font-medium">
            Trending
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;