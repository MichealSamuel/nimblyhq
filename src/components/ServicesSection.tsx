import { Code, Bot, Cloud, Palette, BarChart } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Web & Mobile Development",
    description: "Custom websites and mobile apps built with cutting-edge technologies"
  },
  {
    icon: Bot,
    title: "AI Chatbots & Automation",
    description: "Intelligent chatbots and workflow automation to boost efficiency"
  },
  {
    icon: Cloud,
    title: "SaaS Application Development",
    description: "Scalable software solutions for your business needs"
  },
  {
    icon: Palette,
    title: "Branding & UI/UX Design",
    description: "Beautiful, user-centered designs that make an impact"
  },
  {
    icon: BarChart,
    title: "Data Analysis & Visualization",
    description: "Turn your data into actionable insights with stunning visualizations"
  }
];

export const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver the most in-demand tech services for businesses and startups
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-card backdrop-blur-sm border border-border hover:border-primary transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s backwards`,
                boxShadow: "var(--shadow-glass)"
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-neon transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => navigate('/quote')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-neon hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};
