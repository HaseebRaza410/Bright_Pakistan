import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Categories", path: "/categories" }
  ];

  const categories = [
    "Technology", "Business", "Startups", "Global News", 
    "Automotive", "Finance", "Sports", "Entertainment"
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-hero"></div>
              <h3 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Bright Pakistan
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Pakistan's leading source for tech news, business insights, and innovation updates. 
              Inspiring progress and keeping you informed about the brightest developments across Pakistan.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>
                    <Button variant="ghost" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                      {link.name}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Button variant="ghost" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Subscribe to our newsletter for the latest news and updates.
              </p>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="font-medium">Contact Info</h5>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="h-3 w-3" />
                  <span>contact@brightpakistan.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-3 w-3" />
                  <span>+92 21 1234 5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-3 w-3" />
                  <span>Karachi, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Bright Pakistan. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy">
              <Button variant="ghost" className="text-xs text-muted-foreground hover:text-primary">
                Privacy Policy
              </Button>
            </Link>
            <Link to="/terms">
              <Button variant="ghost" className="text-xs text-muted-foreground hover:text-primary">
                Terms of Service
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" className="text-xs text-muted-foreground hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;