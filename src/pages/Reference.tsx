
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { observeElements } from '@/utils/animations';
import { Terminal, Cpu, Database, Server, Book, FileCode, ChevronRight } from 'lucide-react';

const Reference = () => {
  useEffect(() => {
    const cleanup = observeElements();
    return cleanup;
  }, []);

  const cLibraries = [
    { name: "<cassert>", file: "assert.h", description: "C Diagnostics Library", header: true },
    { name: "<cctype>", file: "ctype.h", description: "Character handling functions", header: true },
    { name: "<cerrno>", file: "errno.h", description: "C Errors", header: true },
    { name: "<cfenv>", file: "fenv.h", description: "Floating-point environment", header: true },
    { name: "<cfloat>", file: "float.h", description: "Characteristics of floating-point types", header: true },
    { name: "<cinttypes>", file: "inttypes.h", description: "C integer types", header: true },
    { name: "<ciso646>", file: "iso646.h", description: "ISO 646 Alternative operator spellings", header: true },
    { name: "<climits>", file: "limits.h", description: "Sizes of integral types", header: true },
    { name: "<clocale>", file: "locale.h", description: "C localization library", header: true },
    { name: "<cmath>", file: "math.h", description: "C numerics library", header: true },
    { name: "<csetjmp>", file: "setjmp.h", description: "Non local jumps", header: true },
    { name: "<csignal>", file: "signal.h", description: "C library to handle signals", header: true },
  ];

  const containerClasses = [
    { name: "vector", description: "Dynamic array container", category: "Sequence Containers" },
    { name: "list", description: "Doubly linked list container", category: "Sequence Containers" },
    { name: "deque", description: "Double-ended queue container", category: "Sequence Containers" },
    { name: "map", description: "Sorted associative container (key-value pairs)", category: "Associative Containers" },
    { name: "set", description: "Sorted associative container (unique keys)", category: "Associative Containers" },
    { name: "unordered_map", description: "Hash table (key-value pairs)", category: "Unordered Associative Containers" },
    { name: "unordered_set", description: "Hash table (unique keys)", category: "Unordered Associative Containers" },
    { name: "stack", description: "LIFO data structure", category: "Container Adaptors" },
    { name: "queue", description: "FIFO data structure", category: "Container Adaptors" },
  ];

  const algorithmsReference = [
    { name: "sort", description: "Sorts elements in range", category: "Sorting" },
    { name: "find", description: "Finds element in range", category: "Non-modifying Sequence Operations" },
    { name: "for_each", description: "Applies function to range", category: "Non-modifying Sequence Operations" },
    { name: "transform", description: "Transforms range", category: "Modifying Sequence Operations" },
    { name: "accumulate", description: "Sums range", category: "Numeric Operations" },
    { name: "binary_search", description: "Checks if value exists in sorted range", category: "Binary Search Operations" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex items-center mb-10 fade-in">
          <div className="h-1 bg-gradient-to-r from-primary to-transparent flex-grow"></div>
          <h1 className="text-5xl font-display font-bold mx-6 text-gradient animate-pulse-slow">REFERENCE</h1>
          <div className="h-1 bg-gradient-to-l from-primary to-transparent flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 mb-10">
          <Card className="border border-primary/30 bg-background/60 backdrop-blur-sm shadow-neon overflow-hidden slide-up">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/30 shimmer"></div>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Terminal className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold">Standard C++ Library Reference</h2>
                <p className="text-muted-foreground">Comprehensive guide to the C++ standard library components</p>
              </div>
            </CardHeader>
            
            <CardContent className="pb-6">
              <Tabs defaultValue="c-library" className="w-full">
                <TabsList className="w-full grid grid-cols-3 mb-6 bg-background/60">
                  <TabsTrigger value="c-library" className="font-mono">
                    <Cpu className="mr-2 h-4 w-4" /> C Library
                  </TabsTrigger>
                  <TabsTrigger value="containers" className="font-mono">
                    <Database className="mr-2 h-4 w-4" /> Containers
                  </TabsTrigger>
                  <TabsTrigger value="algorithms" className="font-mono">
                    <FileCode className="mr-2 h-4 w-4" /> Algorithms
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="c-library" className="mt-6">
                  <div className="text-muted-foreground mb-4">
                    The elements of the C language library are also included as a subset of the C++ Standard library. 
                    These cover many aspects, from general utility functions and macros to input/output functions and dynamic memory management functions:
                  </div>
                  <div className="grid gap-3">
                    {cLibraries.map((lib, index) => (
                      <div 
                        key={index}
                        className="grid grid-cols-3 p-3 border border-primary/20 bg-background/80 rounded-md hover:border-primary/60 hover:bg-background/90 transition-all duration-300"
                      >
                        <div className="font-mono text-code-yellow">{lib.name}</div>
                        <div className="font-mono text-code-green">{lib.description}</div>
                        <div className="text-muted-foreground text-sm text-right">
                          {lib.header && <span className="inline-flex items-center px-2 py-0.5 bg-primary/10 text-primary text-xs rounded">header</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="containers" className="mt-6">
                  <div className="text-muted-foreground mb-4">
                    C++ Standard Library containers store collections of objects with efficient access patterns. 
                    These containers manage memory automatically and provide various methods for accessing, inserting, and removing elements.
                  </div>
                  <div className="grid gap-3">
                    {containerClasses.map((container, index) => (
                      <div 
                        key={index}
                        className="grid grid-cols-3 p-3 border border-primary/20 bg-background/80 rounded-md hover:border-primary/60 hover:bg-background/90 transition-all duration-300"
                      >
                        <div className="font-mono text-code-blue">{container.name}</div>
                        <div className="font-mono text-code-green">{container.description}</div>
                        <div className="text-right">
                          <span className="inline-flex items-center px-2 py-0.5 bg-secondary/10 text-secondary text-xs rounded">{container.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="algorithms" className="mt-6">
                  <div className="text-muted-foreground mb-4">
                    C++ Standard Library algorithms operate on ranges of elements, providing operations such as searching, counting, manipulating, and more.
                    They are highly optimized and designed to work with iterators from any container.
                  </div>
                  <div className="grid gap-3">
                    {algorithmsReference.map((algo, index) => (
                      <div 
                        key={index}
                        className="grid grid-cols-3 p-3 border border-primary/20 bg-background/80 rounded-md hover:border-primary/60 hover:bg-background/90 transition-all duration-300"
                      >
                        <div className="font-mono text-code-purple">{algo.name}</div>
                        <div className="font-mono text-code-green">{algo.description}</div>
                        <div className="text-right">
                          <span className="inline-flex items-center px-2 py-0.5 bg-accent/10 text-accent text-xs rounded">{algo.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border border-primary/30 bg-background/60 backdrop-blur-sm shadow-neon overflow-hidden slide-up">
              <div className="absolute top-0 right-0 w-1 h-full bg-primary/30 shimmer"></div>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Server className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-display font-bold">Memory Model</h2>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center p-4 border border-primary/20 rounded-md mb-3 bg-background/80 hover:border-primary/60 transition-all duration-300">
                  <span className="font-mono">std::memory_order</span>
                  <ChevronRight className="text-primary h-4 w-4" />
                </div>
                <div className="flex justify-between items-center p-4 border border-primary/20 rounded-md mb-3 bg-background/80 hover:border-primary/60 transition-all duration-300">
                  <span className="font-mono">std::atomic</span>
                  <ChevronRight className="text-primary h-4 w-4" />
                </div>
                <div className="flex justify-between items-center p-4 border border-primary/20 rounded-md mb-3 bg-background/80 hover:border-primary/60 transition-all duration-300">
                  <span className="font-mono">std::shared_ptr</span>
                  <ChevronRight className="text-primary h-4 w-4" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-primary/30 bg-background/60 backdrop-blur-sm shadow-neon overflow-hidden slide-up">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/30 shimmer"></div>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Book className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-display font-bold">Language Features</h2>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center p-4 border border-primary/20 rounded-md mb-3 bg-background/80 hover:border-primary/60 transition-all duration-300">
                  <span className="font-mono">Templates</span>
                  <ChevronRight className="text-primary h-4 w-4" />
                </div>
                <div className="flex justify-between items-center p-4 border border-primary/20 rounded-md mb-3 bg-background/80 hover:border-primary/60 transition-all duration-300">
                  <span className="font-mono">Lambda Expressions</span>
                  <ChevronRight className="text-primary h-4 w-4" />
                </div>
                <div className="flex justify-between items-center p-4 border border-primary/20 rounded-md mb-3 bg-background/80 hover:border-primary/60 transition-all duration-300">
                  <span className="font-mono">Smart Pointers</span>
                  <ChevronRight className="text-primary h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="absolute top-[25%] right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
        <div className="absolute bottom-[15%] left-[5%] w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
      </div>
    </Layout>
  );
};

export default Reference;
