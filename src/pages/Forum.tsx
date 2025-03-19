
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Search, Clock, Users, Flame, ArrowUpRight, MessageCircle, User, Filter, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { observeElements } from '@/utils/animations';

interface ForumTopic {
  id: number;
  title: string;
  category: string;
  description: string;
  lastPost: {
    title: string;
    date: string;
    time: string;
    author: string;
  };
  replies: number;
  views: number;
  isHot?: boolean;
  isSticky?: boolean;
}

const Forum = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const cleanup = observeElements();
    return cleanup;
  }, []);

  const forumCategories: { name: string; topics: ForumTopic[] }[] = [
    {
      name: "Beginners",
      topics: [
        {
          id: 1,
          title: "Is my understanding of pointers correct?",
          category: "Beginners",
          description: "Discussions about C++ programming for beginners",
          lastPost: {
            title: "Is my understanding of pointers correct?",
            date: "Mar 6, 2025",
            time: "12:33pm",
            author: "TheIdeasMan"
          },
          replies: 12,
          views: 142
        },
        {
          id: 2,
          title: "Help with first C++ program",
          category: "Beginners",
          description: "Discussions about C++ programming for beginners",
          lastPost: {
            title: "Help with first C++ program",
            date: "Mar 4, 2025",
            time: "10:21am",
            author: "Newbie123"
          },
          replies: 5,
          views: 87
        }
      ]
    },
    {
      name: "Windows Programming",
      topics: [
        {
          id: 3,
          title: "Formatted Console Log with Datetime",
          category: "Windows Programming",
          description: "Win32, MFC, ATL, C++/CLI, .NET ...",
          lastPost: {
            title: "Formatted Console Log with Datetime",
            date: "Mar 12, 2025",
            time: "9:29pm",
            author: "seeplus"
          },
          replies: 3,
          views: 56,
          isHot: true
        }
      ]
    },
    {
      name: "UNIX/Linux Programming",
      topics: [
        {
          id: 4,
          title: "tzdb: cannot locate zone",
          category: "UNIX/Linux Programming",
          description: "Programming C++ for UNIX and Linux",
          lastPost: {
            title: "tzdb: cannot locate zone",
            date: "Mar 3, 2025",
            time: "2:07am",
            author: "spistol"
          },
          replies: 7,
          views: 112
        }
      ]
    },
    {
      name: "General C++ Programming",
      topics: [
        {
          id: 5,
          title: "Call of Templated Function w/ Explicit Template Argument Fails to Compile",
          category: "General C++ Programming",
          description: "Anything about programming in C++",
          lastPost: {
            title: "Call of Templated Function w/ Explicit Template Argument Fails to Compile",
            date: "Mar 16, 2025",
            time: "3:50am",
            author: "mbozzi"
          },
          replies: 14,
          views: 203,
          isHot: true,
          isSticky: true
        },
        {
          id: 6,
          title: "Best practices for modern C++",
          category: "General C++ Programming",
          description: "Anything about programming in C++",
          lastPost: {
            title: "Best practices for modern C++",
            date: "Mar 12, 2025",
            time: "7:14pm",
            author: "CodeMaster"
          },
          replies: 32,
          views: 546,
          isHot: true
        }
      ]
    },
    {
      name: "Lounge",
      topics: [
        {
          id: 7,
          title: "I wrote a cron job!",
          category: "Lounge",
          description: "Discussions about this website, or other topics not related to C++ programming",
          lastPost: {
            title: "I wrote a cron job!",
            date: "Mar 15, 2025",
            time: "11:32am",
            author: "jonnin"
          },
          replies: 4,
          views: 89
        }
      ]
    },
    {
      name: "Jobs",
      topics: [
        {
          id: 8,
          title: "Jobs",
          category: "Jobs",
          description: "Job offers for C++ programmers",
          lastPost: {
            title: "Jobs",
            date: "Apr 18, 2024",
            time: "8:09pm",
            author: "deleted account xyzzy"
          },
          replies: 1,
          views: 234
        }
      ]
    }
  ];

  // Flatten topics for search
  const allTopics = forumCategories.flatMap(category => category.topics);
  
  const filteredTopics = searchQuery 
    ? allTopics.filter(topic => 
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.lastPost.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allTopics;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex items-center mb-10 fade-in">
          <div className="h-1 bg-gradient-to-r from-primary to-transparent flex-grow"></div>
          <h1 className="text-5xl font-display font-bold mx-6 text-gradient animate-pulse-slow">FORUM</h1>
          <div className="h-1 bg-gradient-to-l from-primary to-transparent flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 md:col-span-3">
            <div className="flex flex-col sm:flex-row gap-4 mb-6 slide-up">
              <div className="flex-grow relative">
                <Input 
                  type="search" 
                  placeholder="Search topics..." 
                  className="w-full border-primary/30 bg-background/60 backdrop-blur-sm font-mono pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-grow sm:flex-grow-0">
                  <MessageSquare className="mr-2 h-4 w-4" /> New Topic
                </Button>
                
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="border-primary/30 hover:border-primary/60">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="bg-sidebar border-sidebar-border">
                    <SheetHeader>
                      <SheetTitle className="text-sidebar-foreground">Filter Options</SheetTitle>
                    </SheetHeader>
                    <div className="py-4">
                      <div className="space-y-4">
                        <h3 className="text-sidebar-foreground font-semibold">Sort by</h3>
                        <div className="space-y-2">
                          <Button variant="ghost" className="w-full justify-start">Newest First</Button>
                          <Button variant="ghost" className="w-full justify-start">Most Replies</Button>
                          <Button variant="ghost" className="w-full justify-start">Most Views</Button>
                          <Button variant="ghost" className="w-full justify-start">Recently Updated</Button>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mt-6">
                        <h3 className="text-sidebar-foreground font-semibold">Categories</h3>
                        <div className="space-y-2">
                          {forumCategories.map(category => (
                            <div key={category.name} className="flex items-center">
                              <input type="checkbox" id={category.name} className="mr-2" />
                              <label htmlFor={category.name} className="text-sidebar-foreground">{category.name}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button className="w-full">Apply Filters</Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
            
            <Tabs defaultValue="recent" className="mb-6 slide-up">
              <TabsList className="bg-background/60 w-full flex justify-start overflow-x-auto hide-scrollbar border border-primary/30 p-1">
                <TabsTrigger value="recent" className="gap-2">
                  <Clock className="h-4 w-4" /> Recent
                </TabsTrigger>
                <TabsTrigger value="popular" className="gap-2">
                  <Flame className="h-4 w-4" /> Popular
                </TabsTrigger>
                <TabsTrigger value="unanswered" className="gap-2">
                  <MessageCircle className="h-4 w-4" /> Unanswered
                </TabsTrigger>
                <TabsTrigger value="my-topics" className="gap-2">
                  <User className="h-4 w-4" /> My Topics
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="recent" className="mt-6">
                <div className="space-y-4">
                  {searchQuery && (
                    <div className="text-muted-foreground mb-4">
                      Showing results for "{searchQuery}" - {filteredTopics.length} topics found
                    </div>
                  )}
                  
                  {(searchQuery ? filteredTopics : allTopics).map(topic => (
                    <Card 
                      key={topic.id} 
                      className="border border-primary/30 bg-background/60 backdrop-blur-sm overflow-hidden hover:border-primary/60 transition-all duration-300 group"
                    >
                      <CardContent className="p-0">
                        <div className="relative">
                          {topic.isSticky && (
                            <div className="absolute top-0 left-0 bg-accent/80 text-accent-foreground text-xs px-2 py-0.5">
                              Sticky
                            </div>
                          )}
                          {topic.isHot && !topic.isSticky && (
                            <div className="absolute top-0 left-0 bg-primary/80 text-primary-foreground text-xs px-2 py-0.5">
                              Hot
                            </div>
                          )}
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-secondary/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-6 p-6">
                            <div className="md:col-span-4">
                              <div className="flex items-start">
                                <div className="bg-primary/10 rounded-full p-3 mr-4 hidden sm:block">
                                  <MessageSquare className="h-6 w-6 text-primary" />
                                </div>
                                
                                <div>
                                  <h3 className="text-xl font-display mb-1 group-hover:text-primary transition-colors duration-300">
                                    {topic.title}
                                  </h3>
                                  
                                  <div className="text-sm text-muted-foreground mb-3">
                                    in <span className="text-primary">{topic.category}</span> • Started by <span className="text-code-blue">{topic.lastPost.author}</span>
                                  </div>
                                  
                                  <div className="flex items-center gap-4 text-sm">
                                    <div className="flex items-center">
                                      <MessageCircle className="h-4 w-4 mr-1 text-muted-foreground" /> 
                                      <span>{topic.replies} replies</span>
                                    </div>
                                    <div className="flex items-center">
                                      <Users className="h-4 w-4 mr-1 text-muted-foreground" /> 
                                      <span>{topic.views} views</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="md:col-span-2 flex items-center justify-end mt-4 md:mt-0">
                              <div className="text-right">
                                <div className="flex items-center justify-end text-sm font-semibold text-primary mb-1">
                                  <span className="truncate max-w-[180px]">{topic.lastPost.title}</span> 
                                  <ArrowUpRight className="h-3 w-3 ml-1" />
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {topic.lastPost.date} at {topic.lastPost.time}
                                </div>
                                <div className="text-xs text-code-blue mt-1">
                                  by {topic.lastPost.author}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="popular" className="mt-6">
                <div className="text-center py-10 text-muted-foreground">
                  Most popular topics will be shown here
                </div>
              </TabsContent>
              
              <TabsContent value="unanswered" className="mt-6">
                <div className="text-center py-10 text-muted-foreground">
                  Unanswered topics will be shown here
                </div>
              </TabsContent>
              
              <TabsContent value="my-topics" className="mt-6">
                <div className="text-center py-10 text-muted-foreground">
                  You need to be logged in to view your topics
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
          </div>
          
          <div className="col-span-1 space-y-6 slide-up">
            <Card className="border border-primary/30 bg-background/60 backdrop-blur-sm overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent">
                <h3 className="font-display text-lg">Forum Categories</h3>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2">
                  {forumCategories.map(category => (
                    <div 
                      key={category.name} 
                      className="flex justify-between items-center p-2 hover:bg-primary/10 rounded-sm transition-colors duration-200 cursor-pointer"
                    >
                      <span>{category.name}</span>
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-primary/30 bg-background/60 backdrop-blur-sm overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-secondary/20 to-transparent">
                <h3 className="font-display text-lg">Active Users</h3>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Members Online</span>
                    <span className="text-primary">42</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guests Online</span>
                    <span className="text-primary">128</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Total</span>
                    <span className="text-primary font-bold">170</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-primary/20">
                  <div className="text-sm text-muted-foreground mb-2">Currently Online:</div>
                  <div className="flex flex-wrap gap-1">
                    {["TheIdeasMan", "seeplus", "spistol", "mbozzi", "jonnin"].map(user => (
                      <span key={user} className="text-code-blue text-xs hover:underline cursor-pointer">
                        {user},
                      </span>
                    ))}
                    <span className="text-muted-foreground text-xs">and 37 more...</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-primary/30 bg-background/60 backdrop-blur-sm overflow-hidden animate-pulse-slow">
              <CardHeader className="bg-gradient-to-r from-accent/20 to-transparent">
                <h3 className="font-display text-lg">Forum Stats</h3>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Total Topics</span>
                    <span className="text-primary">1,245</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Total Posts</span>
                    <span className="text-primary">24,689</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Total Members</span>
                    <span className="text-primary">8,942</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Newest Member</span>
                    <span className="text-code-blue hover:underline cursor-pointer">CyberDev2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="absolute top-[35%] right-[15%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
        <div className="absolute bottom-[45%] left-[25%] w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
      </div>
    </Layout>
  );
};

export default Forum;
