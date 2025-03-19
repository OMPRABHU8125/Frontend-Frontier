
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <div className="container px-4 mx-auto py-20">
        <div className="max-w-md mx-auto text-center py-20">
          <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-primary/10 mb-8">
            <span className="font-display text-4xl font-bold text-primary">404</span>
          </div>
          <h1 className="text-3xl font-display font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="rounded-full">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild className="rounded-full">
              <Link to="javascript:history.back()">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
