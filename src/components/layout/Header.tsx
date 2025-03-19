
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import logo from '../../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "backdrop-blur-md bg-background/80 shadow-subtle"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 group"
        >
          <div className="relative h-8 w-8 overflow-hidden flex items-center justify-center">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-code-blue/20 group-hover:bg-code-blue/40 transition-colors"></div>
            <img
              src={logo}
              alt="3D Plus Sign Logo"
              className="h-5 w-5 z-10 group-hover:scale-110 transition-transform"
            />
          </div>
          <span className="font-display text-xl font-semibold tracking-tight text-foreground group-hover:text-code-blue transition-colors">cplusplus.com</span>
        </Link>

        {!isMobile && (
          <nav className="hidden md:flex space-x-8">
            {['Reference', 'Articles', 'Forum', 'Tutorials'].map(item => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-foreground/80 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center space-x-4">
          {!isMobile && (
            <div className="relative w-64">
              <Input
                type="search"
                placeholder="Search..."
                className="pr-8 pl-3 py-1 h-9 rounded-full bg-secondary/50 focus:bg-background border-0 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          )}

          {!isMobile ? (
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="rounded-full px-4">
                Log In
              </Button>
              <Button size="sm" className="rounded-full px-4">
                Sign Up
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>

      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40 px-4 py-6 overflow-y-auto animate-fade-in">
          <div className="flex flex-col space-y-6">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="pr-8 pl-3 py-1 h-10 rounded-full bg-secondary/50 focus:bg-background border-0 focus:ring-1 focus:ring-primary/20 transition-all duration-300 w-full"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>

            <nav className="flex flex-col space-y-4">
              {['Reference', 'Articles', 'Forum', 'Tutorials'].map(item => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-foreground font-medium text-xl px-2 py-3 border-b border-border/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="outline" className="w-full rounded-full py-6">
                Log In
              </Button>
              <Button className="w-full rounded-full py-6">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
