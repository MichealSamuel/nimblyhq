import { Navigation } from "@/components/Navigation";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTABanner } from "@/components/CTABanner";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useVirusiaChat } from "@/hooks/useVirusiaChat";

const Index = () => {
  // Load Virusia AI chatbot only on this page
  useVirusiaChat();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;