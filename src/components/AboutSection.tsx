import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Clock } from "lucide-react";

export const AboutSection = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Projects Delivered" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: CheckCircle, value: "100%", label: "Client Satisfaction" },
  ];

  const technologies = [
    "React", "Node.js", "Python", "AWS", "Azure", "Docker", 
    "Kubernetes", "TensorFlow", "MongoDB", "PostgreSQL"
  ];

  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-portal-glow bg-clip-text text-transparent">
            About Nimbly
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're a team of passionate developers and strategists dedicated to delivering cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Transforming Ideas into Digital Reality
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At Nimbly, we believe in the power of technology to transform businesses and create extraordinary user experiences. 
              Our team combines technical expertise with strategic thinking to deliver solutions that not only meet your current 
              needs but also position you for future growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From startups to enterprise clients, we've helped organizations across various industries leverage technology 
              to streamline operations, enhance customer engagement, and drive sustainable growth.
            </p>
            
            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-foreground">Technologies We Master</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-portal transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-portal mb-4">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-portal-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};