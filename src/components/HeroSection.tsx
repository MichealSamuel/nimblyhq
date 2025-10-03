import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface HeroSectionProps {
  isWelcomeAnimation?: boolean;
}

export const HeroSection = ({ isWelcomeAnimation = false }: HeroSectionProps) => {
  // Safe navigation that works outside Router context
  let navigate;
  try {
    navigate = useNavigate();
  } catch {
    navigate = () => window.location.href = '/home';
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 animate-pulse-glow" />
      
      {/* Neon glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <div className="space-y-8">
          {/* Main heading */}
          <h1 
            className={`text-6xl md:text-8xl font-bold leading-tight tracking-tight ${
              isWelcomeAnimation ? 'opacity-0 animate-title-reveal' : ''
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            <span className="bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
              Smarter Tech,
            </span>
            <br />
            <span className="text-foreground">On Demand.</span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${
              isWelcomeAnimation ? 'opacity-0 animate-slide-right-fade' : ''
            }`}
            style={{ animationDelay: '1s' }}
          >
            NimblyHQ connects you with top freelancers to deliver high-demand tech services like web development, AI automation, and SaaS apps.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className={`pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center ${
              isWelcomeAnimation ? 'opacity-0 animate-bounce-in' : ''
            }`}
            style={{ animationDelay: '1.5s' }}
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 rounded-xl shadow-neon hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300 hover:scale-105 group"
              onClick={() => navigate('/home')}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-10 py-6 rounded-xl transition-all duration-300 hover:scale-105 group"
              onClick={() => {
                // Scroll to chatbot or open it
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with AI Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};