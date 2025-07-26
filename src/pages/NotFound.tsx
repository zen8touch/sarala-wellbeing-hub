import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-background pt-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-healing">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Oops! Page not found</p>
          <Link to="/">
            <Button variant="hero" size="lg">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
