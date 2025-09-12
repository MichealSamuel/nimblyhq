import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    icon: LucideIcon;
  } | null;
}

const serviceDetails: Record<string, {
  features: string[];
  process: string[];
  deliverables: string[];
  timeline: string;
  startingPrice: string;
}> = {
  "Web Development": {
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern Frameworks", "Cross-browser Compatible"],
    process: ["Requirements Analysis", "UI/UX Design", "Development", "Testing & QA", "Deployment & Launch"],
    deliverables: ["Source Code", "Documentation", "Hosting Setup", "SSL Certificate", "1 Month Support"],
    timeline: "4-8 weeks",
    startingPrice: "$5,000"
  },
  "Mobile Development": {
    features: ["Native iOS & Android", "Cross-platform", "App Store Optimization", "Push Notifications", "Offline Support"],
    process: ["App Strategy", "UI/UX Design", "Development", "Testing", "App Store Submission"],
    deliverables: ["Mobile Apps", "Source Code", "App Store Assets", "Documentation", "3 Months Support"],
    timeline: "8-12 weeks",
    startingPrice: "$15,000"
  },
  "Cloud Solutions": {
    features: ["AWS/Azure Setup", "Auto-scaling", "Security Configuration", "Monitoring", "Backup Systems"],
    process: ["Infrastructure Audit", "Architecture Design", "Migration Planning", "Implementation", "Optimization"],
    deliverables: ["Cloud Infrastructure", "Migration Guide", "Monitoring Setup", "Security Config", "Training"],
    timeline: "3-6 weeks",
    startingPrice: "$8,000"
  },
  "AI & Machine Learning": {
    features: ["Custom AI Models", "Data Processing", "API Integration", "Real-time Analytics", "Automated Workflows"],
    process: ["Data Analysis", "Model Development", "Training & Testing", "Integration", "Performance Monitoring"],
    deliverables: ["AI Models", "API Endpoints", "Documentation", "Training Data", "Ongoing Support"],
    timeline: "6-10 weeks",
    startingPrice: "$20,000"
  },
  "Cybersecurity": {
    features: ["Security Audits", "Penetration Testing", "Compliance", "Threat Monitoring", "Incident Response"],
    process: ["Security Assessment", "Vulnerability Testing", "Report Generation", "Remediation", "Ongoing Monitoring"],
    deliverables: ["Security Report", "Remediation Plan", "Security Tools", "Training", "Compliance Docs"],
    timeline: "2-4 weeks",
    startingPrice: "$10,000"
  },
  "Data Analytics": {
    features: ["Custom Dashboards", "Real-time Analytics", "Data Integration", "Automated Reports", "Predictive Analytics"],
    process: ["Data Audit", "Dashboard Design", "Integration", "Testing", "Training & Handover"],
    deliverables: ["Analytics Platform", "Custom Dashboards", "Data Pipeline", "Documentation", "Training"],
    timeline: "4-6 weeks",
    startingPrice: "$12,000"
  },
  "Digital Marketing": {
    features: ["SEO Optimization", "PPC Campaigns", "Social Media", "Content Strategy", "Analytics Tracking"],
    process: ["Market Research", "Strategy Development", "Campaign Setup", "Implementation", "Performance Review"],
    deliverables: ["Marketing Strategy", "Campaign Assets", "Analytics Setup", "Performance Reports", "Optimization"],
    timeline: "2-3 weeks setup",
    startingPrice: "$3,000/month"
  },
  "UI/UX Design": {
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"],
    process: ["Research & Discovery", "Wireframing", "Visual Design", "Prototyping", "Testing & Iteration"],
    deliverables: ["Design Files", "Prototypes", "Design System", "Style Guide", "Handoff Documentation"],
    timeline: "3-5 weeks",
    startingPrice: "$7,000"
  },
  "Consulting & Strategy": {
    features: ["Technology Assessment", "Strategic Planning", "Process Optimization", "Team Training", "Implementation Roadmap"],
    process: ["Current State Analysis", "Gap Assessment", "Strategy Development", "Roadmap Creation", "Implementation Planning"],
    deliverables: ["Strategy Document", "Implementation Roadmap", "Process Documentation", "Training Materials", "Action Plan"],
    timeline: "2-4 weeks",
    startingPrice: "$5,000"
  },
  "API Development": {
    features: ["REST/GraphQL APIs", "Documentation", "Authentication", "Rate Limiting", "Monitoring"],
    process: ["API Design", "Development", "Testing", "Documentation", "Deployment & Monitoring"],
    deliverables: ["API Endpoints", "Documentation", "SDK/Libraries", "Monitoring Setup", "Support"],
    timeline: "3-6 weeks",
    startingPrice: "$8,000"
  }
};

export const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  if (!service) return null;

  const details = serviceDetails[service.title];
  const Icon = service.icon;

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-portal">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <DialogTitle className="text-2xl">{service.title}</DialogTitle>
              <DialogDescription className="text-base mt-2">
                {service.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {details && (
          <div className="space-y-8">
            {/* Pricing & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Starting Price</h4>
                <p className="text-2xl font-bold text-portal-glow">{details.startingPrice}</p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Timeline</h4>
                <p className="text-lg text-foreground">{details.timeline}</p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Key Features</h4>
              <div className="flex flex-wrap gap-2">
                {details.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Our Process</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {details.process.map((step, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/30 border border-border/30">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-portal flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <span className="text-sm text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">What You'll Receive</h4>
              <div className="space-y-2">
                {details.deliverables.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-portal-glow flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-border/50">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} variant="portal" size="lg" className="flex-1">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button onClick={scrollToContact} variant="outline" size="lg" className="flex-1">
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};