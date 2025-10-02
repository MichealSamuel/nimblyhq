import { Shield, Zap, TrendingUp } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Freelancers",
      description: "Work with vetted experts who deliver quality results"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Get your projects completed quickly without compromising quality"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Grow your business with tech solutions that scale with you"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
            About NimblyHQ
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a next-gen freelancing tech agency helping businesses scale with expert freelancers and cutting-edge automation tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-card backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s backwards`
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:shadow-neon transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
