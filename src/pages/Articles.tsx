import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChevronRight, Star, Calendar, Eye, Tag, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { observeElements } from '@/utils/animations';

interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string[];
  rating: number;
  votes: number;
  tags: string[];
  excerpt: string;
}

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const cleanup = observeElements();
    return cleanup;
  }, []);

  const articles: Article[] = [
    {
      id: 1,
      title: "How to avoid bugs using modern C++",
      author: "PVSCoder",
      date: "Sep 16, 2023",
      category: ["Tips and Tricks", "Standard Library", "Language Features"],
      rating: 4.3,
      votes: 919,
      tags: ["C++", "Error Handling", "Best Practices"],
      excerpt: "An in-depth guide to leveraging modern C++ features to write more robust, bug-free code."
    },
    {
      id: 2,
      title: "Learning Computer Programming Terminology",
      author: "Sean Alvarez",
      date: "Aug 25, 2023",
      category: ["How-To", "Beginners"],
      rating: 3.7,
      votes: 456,
      tags: ["Terminology", "Basics", "Guide"],
      excerpt: "A comprehensive guide to understanding the most common programming terms and concepts."
    },
    {
      id: 3,
      title: "C++ class for generating Fibonacci series",
      author: "mhcrnl",
      date: "Aug 9, 2023",
      category: ["Source Code", "Algorithms"],
      rating: 3.6,
      votes: 723,
      tags: ["Fibonacci", "Algorithms", "Mathematics"],
      excerpt: "Implementing an efficient Fibonacci sequence generator using modern C++ techniques."
    },
    {
      id: 4,
      title: "C++ casting explained",
      author: "Uk Marine",
      date: "May 15, 2023",
      category: ["Visual C++", "Tips and Tricks"],
      rating: 4.0,
      votes: 472,
      tags: ["Type Casting", "C++", "Memory Management"],
      excerpt: "Understanding the different casting operators in C++ and when to use each one."
    },
    {
      id: 5,
      title: "Safe Clearing of Private Data",
      author: "AndreyKarpov",
      date: "Apr 6, 2023",
      category: ["Tips and Tricks", "Language Features", "Security"],
      rating: 4.6,
      votes: 143,
      tags: ["Security", "Memory Management", "Best Practices"],
      excerpt: "How to securely erase sensitive data from memory in C++ applications."
    },
    {
      id: 6,
      title: "How I Learned A Vital Borland C++ Coding Technique I Couldn't Learn Alone",
      author: "analyzoh",
      date: "Mar 23, 2023",
      category: ["How-To", "Source Code", "Tips and Tricks"],
      rating: 3.6,
      votes: 202,
      tags: ["Borland", "Legacy", "Techniques"],
      excerpt: "A personal journey into mastering an obscure but powerful C++ coding technique."
    },
    {
      id: 7,
      title: "Sierpinski Triangle Fractal - The easiest way to produce randomness",
      author: "bilalCh213",
      date: "Oct 13, 2022",
      category: ["Tools and Libraries", "Graphics and multimedia", "Algorithms"],
      rating: 4.3,
      votes: 924,
      tags: ["Fractals", "Graphics", "Randomness"],
      excerpt: "Learn how to generate the beautiful Sierpinski Triangle fractal using simple algorithms."
    },
    {
      id: 8,
      title: "Koch Fractal - One of the easiest algorithms with graphics",
      author: "bilalCh213",
      date: "Oct 1, 2022",
      category: ["Tools and Libraries", "Graphics and multimedia", "Algorithms"],
      rating: 4.2,
      votes: 348,
      tags: ["Fractals", "Graphics", "Algorithms"],
      excerpt: "A step-by-step guide to implementing the Koch snowflake fractal in C++."
    }
  ];

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
    article.category.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="h-4 w-4 fill-code-yellow text-code-yellow" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="h-4 w-4 text-muted-foreground" />
            <Star className="h-4 w-4 fill-code-yellow text-code-yellow absolute top-0 left-0 overflow-hidden" style={{ clipPath: 'inset(0 50% 0 0)' }} />
          </div>
        );
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-muted-foreground" />);
      }
    }
    
    return stars;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex items-center mb-10 fade-in">
          <div className="h-1 bg-gradient-to-r from-primary to-transparent flex-grow"></div>
          <h1 className="text-5xl font-display font-bold mx-6 text-gradient animate-pulse-slow">ARTICLES</h1>
          <div className="h-1 bg-gradient-to-l from-primary to-transparent flex-grow"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="flex-grow">
            <div className="relative slide-up">
              <Input 
                type="search" 
                placeholder="Search articles by title, author, or tag..." 
                className="w-full border-primary/30 bg-background/60 backdrop-blur-sm font-mono px-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="flex gap-2 slide-up">
            <Button variant="outline" className="border-primary/30 hover:border-primary/60">
              Latest
            </Button>
            <Button variant="outline" className="border-primary/30 hover:border-primary/60">
              Most Viewed
            </Button>
            <Button variant="outline" className="border-primary/30 hover:border-primary/60">
              Top Rated
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mb-10 slide-up">
          <TabsList className="bg-background/60 w-full flex justify-start overflow-x-auto hide-scrollbar border border-primary/30 p-1">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="tips">Tips & Tricks</TabsTrigger>
            <TabsTrigger value="algorithms">Algorithms</TabsTrigger>
            <TabsTrigger value="graphics">Graphics</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <Card 
                    key={article.id} 
                    className="border border-primary/30 bg-background/60 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 overflow-hidden group"
                  >
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-4 relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-secondary/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        
                        <div className="p-6 md:col-span-3">
                          <h2 className="text-xl md:text-2xl font-display mb-2 group-hover:text-primary transition-colors duration-300">
                            {article.title}
                          </h2>
                          
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <span>by <span className="text-code-blue">{article.author}</span></span>
                            <span>•</span>
                            <span className="flex items-center"><Calendar className="mr-1 h-3 w-3" /> {article.date}</span>
                          </div>
                          
                          <p className="mb-4 line-clamp-2 text-muted-foreground">{article.excerpt}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.map((tag, idx) => (
                              <span 
                                key={idx} 
                                className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/20"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                              {article.category.map((cat, idx) => (
                                <span 
                                  key={idx} 
                                  className="text-xs text-muted-foreground"
                                >
                                  {idx > 0 ? ' · ' : ''}{cat}
                                </span>
                              ))}
                            </div>
                            <Button 
                              variant="ghost" 
                              className="gap-1 text-primary hover:text-primary/80 p-0 h-auto"
                            >
                              Read More <ChevronRight className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-b from-muted/20 to-muted/10 p-6 flex flex-col items-center justify-center border-l border-primary/20">
                          <div className="flex mb-2">
                            {renderStars(article.rating)}
                          </div>
                          <div className="text-lg font-semibold text-primary">{article.rating.toFixed(1)}</div>
                          <div className="text-xs text-muted-foreground flex items-center">
                            <Eye className="h-3 w-3 mr-1" /> {article.votes} votes
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-10 text-muted-foreground">
                  No articles match your search criteria. Try different keywords.
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="tutorials" className="mt-6">
            <div className="text-center py-10 text-muted-foreground">
              Filter by Tutorials category
            </div>
          </TabsContent>
          
          <TabsContent value="tips" className="mt-6">
            <div className="text-center py-10 text-muted-foreground">
              Filter by Tips & Tricks category
            </div>
          </TabsContent>
          
          <TabsContent value="algorithms" className="mt-6">
            <div className="text-center py-10 text-muted-foreground">
              Filter by Algorithms category
            </div>
          </TabsContent>
          
          <TabsContent value="graphics" className="mt-6">
            <div className="text-center py-10 text-muted-foreground">
              Filter by Graphics category
            </div>
          </TabsContent>
          
          <TabsContent value="security" className="mt-6">
            <div className="text-center py-10 text-muted-foreground">
              Filter by Security category
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center my-10 fade-in">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <Button 
                key={page} 
                variant={page === 1 ? "default" : "outline"} 
                className={page === 1 ? "" : "border-primary/30 hover:border-primary/60"}
                size="sm"
              >
                {page}
              </Button>
            ))}
            <Button variant="outline" className="border-primary/30 hover:border-primary/60" size="sm">
              Next
            </Button>
          </div>
        </div>
        
        <div className="absolute top-[15%] right-[5%] w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
        <div className="absolute bottom-[25%] left-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
      </div>
    </Layout>
  );
};

export default Articles;
