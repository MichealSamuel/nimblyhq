import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    company: "TechStart Inc.",
    text: "NimblyHQ transformed our digital presence. The team delivered a stunning website and AI chatbot that increased our conversions by 300%.",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    company: "GrowthLab",
    text: "Working with NimblyHQ was seamless. They understood our vision and delivered a SaaS platform that our users love.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    company: "DataViz Pro",
    text: "The data visualization dashboard they built for us is incredible. It's intuitive, beautiful, and has become essential to our operations.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-12 text-center">
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-xl text-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
