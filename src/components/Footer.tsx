import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Web Development",
    "Mobile Development", 
    "Cloud Solutions",
    "AI & Machine Learning",
    "Cybersecurity",
    "Data Analytics"
  ];

  const company = [
    "About Us",
    "Our Team",
    "Careers",
    "Case Studies",
    "Blog",
    "Contact"
  ];

  const legal = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "GDPR Compliance"
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-card/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-portal-glow bg-clip-text text-transparent">
              Nimbly
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Professional tech solutions agency delivering cutting-edge technology to transform your business.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                hello@nimbly.agency
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item}>
                  <button className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item}>
                  <button className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <h5 className="text-sm font-medium text-foreground mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg bg-card hover:bg-accent transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Nimbly. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with ❤️ for businesses that want to grow
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-portal-primary/3 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};