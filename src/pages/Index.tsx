import { HeroSection } from "@/components/HeroSection";
import { PortalCard } from "@/components/PortalCard";
import { 
  Zap, 
  Globe, 
  Database, 
  Shield, 
  Cpu, 
  Rocket,
  Brain,
  Users,
  Cloud,
  Settings
} from "lucide-react";

const portalDestinations = [
  {
    title: "Neural Network",
    description: "Advanced AI systems and machine learning capabilities for next-generation processing.",
    icon: Brain,
  },
  {
    title: "Cloud Nexus", 
    description: "Infinite cloud computing resources spanning multiple dimensions and realities.",
    icon: Cloud,
  },
  {
    title: "Quantum Core",
    description: "Harness the power of quantum computing for impossible calculations.",
    icon: Cpu,
  },
  {
    title: "Security Vault",
    description: "Impenetrable digital fortress protecting your most valuable data assets.",
    icon: Shield,
  },
  {
    title: "Global Network",
    description: "Connected infrastructure spanning across all known digital realms.",
    icon: Globe,
  },
  {
    title: "Data Stream",
    description: "Real-time data processing and analytics from infinite information sources.",
    icon: Database,
  },
  {
    title: "Power Grid",
    description: "Unlimited energy distribution system powering the digital multiverse.", 
    icon: Zap,
  },
  {
    title: "Launch Pad",
    description: "Deploy and scale your applications across dimensional boundaries.",
    icon: Rocket,
  },
  {
    title: "Collective",
    description: "Connect with beings and entities from across the digital cosmos.",
    icon: Users,
  },
  {
    title: "Control Center",
    description: "Master control interface for managing your portal operations.",
    icon: Settings,
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <HeroSection />
      
      {/* Portal Grid Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-portal-glow bg-clip-text text-transparent">
              Portal Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your gateway to explore infinite digital realms and unlock unprecedented capabilities.
            </p>
          </div>
          
          {/* Portal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portalDestinations.map((destination, index) => (
              <div
                key={destination.title}
                className="animate-float"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: `${6 + (index % 3)}s`,
                }}
              >
                <PortalCard
                  title={destination.title}
                  description={destination.description}
                  icon={destination.icon}
                  onClick={() => {
                    // Portal navigation logic would go here
                    console.log(`Entering ${destination.title} portal...`);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-portal-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portal-secondary/5 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
};

export default Index;