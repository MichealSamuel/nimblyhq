import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  isWelcomeAnimation?: boolean;
}

export const HeroSection = ({ isWelcomeAnimation = false }: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Minimal grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-portal-glow/5 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <div className="space-y-12">
          {/* Main heading */}
          <h1 
            className={`text-7xl md:text-9xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent leading-tight tracking-tight ${
              isWelcomeAnimation ? 'opacity-0 animate-title-reveal' : ''
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            Nimbly
          </h1>
          
          {/* Subtitle */}
          <p 
            className={`text-lg md:text-xl text-muted-foreground max-w-md mx-auto font-light ${
              isWelcomeAnimation ? 'opacity-0 animate-slide-right-fade' : ''
            }`}
            style={{ animationDelay: '1s' }}
          >
            Technology solutions for modern businesses
          </p>
          
          {/* CTA Button */}
          <div 
            className={`pt-8 ${
              isWelcomeAnimation ? 'opacity-0 animate-bounce-in' : ''
            }`}
            style={{ animationDelay: '1.5s' }}
          >
            <Button 
              variant="portal"
              size="lg"
              className="font-medium px-10 py-6 rounded-xl text-base transition-all duration-300 hover:scale-105 group"
              onClick={() => navigate('/home')}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};