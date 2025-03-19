
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Youtube, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 pt-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative h-8 w-8 overflow-hidden flex items-center justify-center">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-code-blue/20 group-hover:bg-code-blue/40 transition-colors"></div>
                <Code className="h-5 w-5 text-code-blue z-10 group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-display text-xl font-semibold tracking-tight text-foreground">cplusplus.com</span>
            </Link>
            <p className="text-muted-foreground">
              The C++ Resources Network. Comprehensive C++ documentation, tutorials, and community.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-secondary/60 hover:bg-secondary">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-secondary/60 hover:bg-secondary">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-secondary/60 hover:bg-secondary">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-secondary/60 hover:bg-secondary">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-md mb-4">Documentation</h4>
            <ul className="space-y-3">
              {['C++ Language', 'Standard Library', 'Code Samples', 'Reference Guides'].map(item => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-md mb-4">Community</h4>
            <ul className="space-y-3">
              {['Forum', 'Discord', 'Newsletter', 'Contribute'].map(item => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-md mb-4">About</h4>
            <ul className="space-y-3">
              {['About Us', 'FAQ', 'Standards', 'Contact'].map(item => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 py-6 text-center md:flex md:justify-between md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} cplusplus.com. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-4">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
