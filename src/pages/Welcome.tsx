import { HeroSection } from "@/components/HeroSection";
import { useEffect, useState } from "react";

const Welcome = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated curtain overlay */}
      <div 
        className={`absolute inset-0 bg-background z-50 origin-top ${
          isLoaded ? 'animate-curtain-reveal' : ''
        }`}
        style={{ animationDelay: '0.8s' }}
      />
      
      {/* Main content with entrance animation */}
      <div 
        className={`min-h-screen transition-all duration-1000 ${
          isLoaded ? 'animate-welcome-fade' : 'opacity-0'
        }`}
      >
        <HeroSection isWelcomeAnimation={isLoaded} />
      </div>
    </div>
  );
};

export default Welcome;