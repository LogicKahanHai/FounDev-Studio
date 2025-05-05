
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
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
    <div className="min-h-screen flex items-center justify-center bg-logic-dark">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-logic-blue/20 rounded-full mb-8">
          <span className="text-5xl font-bold text-logic-blue">404</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-white">Page Not Found</h1>
        <p className="text-xl text-logic-gray-light mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-logic-blue hover:bg-logic-blue/90 text-white px-8 py-6">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
