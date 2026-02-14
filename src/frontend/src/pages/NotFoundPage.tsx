import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, AlertTriangle } from 'lucide-react';
import { navigate } from '../router/router';

export default function NotFoundPage() {
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-accent" />
            </div>
            <CardTitle className="text-2xl">Page Not Found</CardTitle>
          </div>
          <CardDescription>
            The page you're looking for doesn't exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Please check the URL or return to the homepage to find what you're looking for.
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleGoHome} className="w-full">
            <Home className="w-4 h-4 mr-2" />
            Go to Homepage
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
