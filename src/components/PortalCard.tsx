import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PortalCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
  glowColor?: string;
}

export const PortalCard = ({ 
  title, 
  description, 
  icon: Icon, 
  onClick,
  glowColor = "portal-primary"
}: PortalCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-portal-surface/60 backdrop-blur-sm border-border/50 cursor-pointer transition-all duration-500 hover:shadow-portal hover:border-primary/50 hover:scale-105"
      onClick={onClick}
    >
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative p-6 flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-2xl bg-gradient-portal shadow-glow group-hover:animate-pulse-glow transition-all duration-300">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-primary/50 transition-all duration-500" />
      </div>
    </Card>
  );
};