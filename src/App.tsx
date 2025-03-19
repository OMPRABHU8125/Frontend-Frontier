
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load these routes for better performance
import { lazy, Suspense } from "react";
const Tutorials = lazy(() => import("./pages/Tutorials"));
const Reference = lazy(() => import("./pages/Reference"));
const Articles = lazy(() => import("./pages/Articles"));
const Forum = lazy(() => import("./pages/Forum"));
import Cursor from "./components/ui/cursor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Cursor/>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tutorials" element={
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
              <Tutorials />
            </Suspense>
          } />
          <Route path="/reference" element={
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
              <Reference />
            </Suspense>
          } />
          <Route path="/articles" element={
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
              <Articles />
            </Suspense>
          } />
          <Route path="/forum" element={
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
              <Forum />
            </Suspense>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
