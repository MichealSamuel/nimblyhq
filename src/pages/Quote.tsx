import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    services: [] as string[],
  });

  const services = [
    "Web Development",
    "Mobile Development", 
    "UI/UX Design",
    "E-commerce Solutions",
    "Digital Marketing",
    "SEO & Analytics",
    "Custom Software",
    "API Development",
    "Database Design",
    "Cloud Solutions"
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote request:", formData);
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours with a detailed proposal.",
    });
    // Reset form
    setFormData({
      name: "", email: "", company: "", phone: "", projectType: "", 
      budget: "", timeline: "", description: "", services: []
    });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-6 py-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground via-portal-glow to-portal-secondary bg-clip-text text-transparent">
              Get Your Project Quote
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Tell us about your project and we'll provide a detailed proposal
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="bg-input border-border"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Project Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}>
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-website">New Website</SelectItem>
                        <SelectItem value="redesign">Website Redesign</SelectItem>
                        <SelectItem value="mobile-app">Mobile App</SelectItem>
                        <SelectItem value="web-app">Web Application</SelectItem>
                        <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                        <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                        <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                        <SelectItem value="over-50k">Over $50,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="2-3-months">2-3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Services Needed</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={formData.services.includes(service)}
                        onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                      />
                      <Label htmlFor={service} className="text-sm">{service}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Project Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Tell us more about your project, goals, and requirements..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  required
                  rows={6}
                  className="bg-input border-border"
                />
              </div>

              {/* Submit */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  variant="portal"
                  size="lg"
                  className="w-full font-semibold py-4 rounded-xl text-lg"
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Submit Quote Request
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  We'll review your request and get back to you within 24 hours
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Quote;