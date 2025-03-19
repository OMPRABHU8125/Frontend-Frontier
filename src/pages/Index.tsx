
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, FileCode, Database, TerminalSquare, Cpu, Zap, ChevronRight, CircuitBoard, Globe, Server, Network, BookOpen, GraduationCap, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from '@/components/layout/Layout';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  // Animation effect for the terminal text
  const [displayText, setDisplayText] = React.useState("");
  const fullText = "#include <iostream>\n\nint main() {\n  std::cout << \"Hello, C++ World\";\n  return 0;\n}";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <div className="absolute inset-0 -z-10 bg-[url('/noise.png')] opacity-30 mix-blend-soft-light"></div>
      <div className="absolute inset-0 -z-10 bg-grid-pattern"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-gradient">
            <span className="block">Cplusplus.com</span><br></br>
            <span className="block text-glow">RESOURCES<span className="text-primary">_</span>NETWORK</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-pulse-slow">
            Complete C++ language documentation and community.
            <span className="block mt-2">Discover the power of modern C++.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-none border border-primary/50 bg-background/80 text-primary hover:bg-primary/20 hover:text-white group transition-all duration-300 min-w-40">
              REFERENCE
              <FileCode className="ml-2 h-4 w-4 group-hover:animate-pulse" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-none border border-primary/50 hover:bg-primary/10 min-w-40">
              TUTORIALS
              <GraduationCap className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10"></div>
          <div className="glass-terminal overflow-hidden border border-primary/30 animate-fade-in shadow-glow" style={{ animationDelay: '300ms' }}>
            <div className="bg-black/80 p-3 border-b border-primary/30 flex items-center">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-code-red opacity-75"></div>
                <div className="h-3 w-3 rounded-full bg-code-yellow opacity-75"></div>
                <div className="h-3 w-3 rounded-full bg-code-green opacity-75"></div>
              </div>
              <div className="mx-auto font-mono text-sm text-primary/80">hello_world.cpp</div>
            </div>
            <pre className="overflow-x-auto p-4 text-sm font-mono leading-relaxed bg-black/80 text-code-foreground">
              <code>
                {displayText && <span className="inline-block after:content-['_'] after:animate-pulse after:text-primary">{displayText}</span>}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    {
      title: "C++ Reference",
      description: "Complete reference of the C++ language and standard library",
      icon: <FileCode className="h-6 w-6" />,
      color: "bg-cyan-500",
      link: "/reference"
    },
    {
      title: "Library",
      description: "Comprehensive documentation for the C++ Standard Library",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-purple-500",
      link: "/reference"
    },
    {
      title: "Articles",
      description: "In-depth tutorials and articles about C++ programming",
      icon: <CircuitBoard className="h-6 w-6" />,
      color: "bg-green-400",
      link: "/articles"
    },
    {
      title: "Community",
      description: "Join the C++ community and discuss with other developers",
      icon: <Network className="h-6 w-6" />,
      color: "bg-amber-500",
      link: "/forum"
    },
  ];

  return (
    <section className="py-20 bg-background/80 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto text-center mb-16">
          <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-gradient">SYSTEM MODULES</h2>
          <p className="text-muted-foreground">Access specialized resources to enhance your C++ programming skills.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={category.link}>
                <Card className="h-full overflow-hidden border-primary/10 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-glow group-hover:scale-105 transform transition">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`${category.color} text-white p-3 rounded-none w-fit mb-4 shadow-glow-sm`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300 font-mono tracking-wide">{category.title}</h3>
                    <p className="text-muted-foreground flex-grow mb-4">{category.description}</p>
                    <div className="flex items-center text-primary font-medium font-mono text-sm">
                      <span>ACCESS</span>
                      <ChevronRight className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    "Complete C++ Standard Library documentation",
    "Interactive code examples",
    "C++11/14/17/20/23 features explained",
    "STL algorithms and containers",
    "Memory management best practices",
    "Multithreading and concurrency guides"
  ];

  return (
    <section className="py-20 bg-black/30 relative">
      <div className="absolute inset-0 bg-grid-small-pattern opacity-10"></div>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6 text-gradient">SYSTEM CAPABILITIES</h2>
            <p className="text-muted-foreground mb-8">
              Our comprehensive C++ resource network provides detailed documentation, tutorials, and community support for C++ programmers of all levels.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5 bg-primary/20 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-primary"></div>
                  </div>
                  <span className="font-mono text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="mt-8 rounded-none bg-transparent border border-primary/50 hover:bg-primary/20 text-primary hover:text-white">
              EXPLORE DOCS
              <Code className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-xl opacity-70"></div>
            <div className="relative border border-primary/30 shadow-glow overflow-hidden transform perspective">
              <img 
                src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="C++ code" 
                className="w-full h-auto object-cover filter-cyberpunk"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 font-mono text-xs text-white/80 border-t border-primary/30 bg-black/50 backdrop-blur-sm">
                &gt; C++23_FEATURES.CPP // STATUS: COMPILING
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RecentPosts = () => {
  const posts = [
    {
      title: "Understanding C++20 Concepts",
      excerpt: "Explore how Concepts simplify template metaprogramming and make C++ code more expressive and maintainable.",
      author: "COMPILER_EXPERT",
      date: "05.15.2023",
      category: "C++20",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      title: "Memory Management in Modern C++",
      excerpt: "Learn how to prevent memory leaks using smart pointers, RAII, and other modern C++ memory management techniques.",
      author: "SYS_ARCHITECT",
      date: "04.28.2023",
      category: "Best Practices",
      image: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Mastering STL Algorithms",
      excerpt: "Discover the power of the Standard Template Library algorithms for efficient data manipulation in your C++ projects.",
      author: "STL_WIZARD",
      date: "04.15.2023",
      category: "STL",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    }
  ];

  return (
    <section className="py-20 bg-background/80 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-display font-bold tracking-tight text-gradient">DATA FEEDS</h2>
          <Button variant="outline" className="rounded-none border-primary/50 text-primary hover:bg-primary/10">
            ALL ARTICLES
            <TerminalSquare className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-primary/10 bg-black/30 backdrop-blur-sm hover:shadow-glow transition-all duration-300 h-full flex flex-col hover:border-primary/50 group">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter-cyberpunk"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow bg-black/50">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/30">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 font-mono tracking-wide group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm font-mono text-primary/70">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "CONNECTION ESTABLISHED",
      description: "You've been subscribed to the C++ resources newsletter.",
    });
  };

  return (
    <section className="py-20 bg-black/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-soft-light"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold tracking-tight mb-4 text-gradient">STAY UPDATED</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for C++ tips, tutorials, and the latest language features delivered directly to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="flex h-12 w-full rounded-none border border-primary/30 bg-black/50 px-6 py-2 text-sm font-mono shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary sm:flex-1"
              required
            />
            <Button type="submit" className="h-12 rounded-none bg-primary/20 border border-primary/50 text-primary hover:bg-primary/30 hover:text-white">
              SUBSCRIBE
              <Globe className="ml-2 h-4 w-4" />
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4 font-mono">
            PRIVACY RESPECTED: WE NEVER SHARE YOUR EMAIL WITH THIRD PARTIES
          </p>
        </div>
      </div>
    </section>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <Features />
      <RecentPosts />
      <Newsletter />
    </Layout>
  );
};

export default IndexPage;
