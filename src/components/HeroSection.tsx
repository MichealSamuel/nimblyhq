import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/portal-hero.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Professional tech solutions and digital innovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-portal-glow rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-primary/20">
            <Sparkles className="h-4 w-4 text-portal-glow" />
            <span className="text-sm font-medium text-foreground/90">
              Professional Tech Solutions
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-foreground via-portal-glow to-portal-secondary bg-clip-text text-transparent leading-tight">
            Nimbly
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Delivering cutting-edge technology solutions that drive business growth and digital transformation.
          </p>
          
          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              variant="portal"
              size="lg"
              className="font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105 group"
              onClick={() => navigate('/home')}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};