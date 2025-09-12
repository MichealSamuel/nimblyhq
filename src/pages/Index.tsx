import { HeroSection } from "@/components/HeroSection";
import { PortalCard } from "@/components/PortalCard";
import { 
  Zap, 
  Globe, 
  Database, 
  Shield, 
  Cpu, 
  Brain,
  Users,
  Cloud,
  Settings,
  Smartphone,
  Palette
} from "lucide-react";

const techServices = [
  {
    title: "Web Development",
    description: "Custom websites, web applications, and e-commerce platforms built with modern technologies for optimal performance and user experience.",
    icon: Globe,
  },
  {
    title: "Mobile Development", 
    description: "Native iOS and Android applications, cross-platform solutions using React Native and Flutter for maximum market reach.",
    icon: Smartphone,
  },
  {
    title: "Cloud Solutions",
    description: "AWS and Azure cloud migration, infrastructure setup, DevOps automation, and scalable cloud architecture design.",
    icon: Cloud,
  },
  {
    title: "AI & Machine Learning",
    description: "AI integration, chatbot development, process automation, machine learning models, and intelligent business solutions.",
    icon: Brain,
  },
  {
    title: "Cybersecurity",
    description: "Security audits, penetration testing, compliance consulting, and comprehensive data protection strategies for your business.",
    icon: Shield,
  },
  {
    title: "Data Analytics",
    description: "Business intelligence dashboards, data visualization, reporting systems, and analytics solutions for data-driven decisions.",
    icon: Database,
  },
  {
    title: "Digital Marketing",
    description: "SEO optimization, PPC campaigns, social media automation, and digital marketing strategies that drive results.", 
    icon: Zap,
  },
  {
    title: "UI/UX Design",
    description: "User research, design systems, prototyping, and user experience optimization for web and mobile applications.",
    icon: Palette,
  },
  {
    title: "Consulting & Strategy",
    description: "Digital transformation consulting, technology audits, and strategic planning for sustainable business growth.",
    icon: Users,
  },
  {
    title: "API Development",
    description: "REST and GraphQL API development, system integrations, microservices architecture, and third-party API connections.",
    icon: Settings,
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <HeroSection />
      
      {/* Services Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-portal-glow bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {techServices.map((service, index) => (
              <div
                key={service.title}
                className="animate-float"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: `${6 + (index % 3)}s`,
                }}
              >
                <PortalCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  onClick={() => {
                    // Service inquiry logic would go here
                    console.log(`Inquiring about ${service.title} service...`);
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