import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTABanner = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-pulse-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.2),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent animate-gradient">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Ready to transform your business with cutting-edge technology? Let's make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate('/quote')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 rounded-xl shadow-neon hover:shadow-[0_0_40px_hsl(var(--primary)/0.8)] transition-all duration-300 hover:scale-105 group"
            >
              Work With Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/portal')}
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-10 py-6 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Client Portal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
