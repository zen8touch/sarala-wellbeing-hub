import { Zap, Flower, Heart, Brain, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Traditional Acupuncture",
      description: "Ancient healing technique using fine needles to restore energy balance and promote natural healing",
      benefits: ["Pain relief", "Stress reduction", "Improved sleep", "Better energy flow"],
      duration: "60-90 minutes",
      price: "₹1,500 - ₹2,500"
    },
    {
      icon: Flower,
      title: "Bach Flower Remedies",
      description: "Gentle flower essences to address emotional imbalances and support mental well-being",
      benefits: ["Emotional balance", "Anxiety relief", "Mood enhancement", "Inner peace"],
      duration: "45-60 minutes",
      price: "₹1,200 - ₹2,000"
    },
    {
      icon: Brain,
      title: "Autism Spectrum Support",
      description: "Specialized treatments designed to help individuals with autism and their families",
      benefits: ["Behavioral support", "Sensory integration", "Communication improvement", "Family guidance"],
      duration: "75-90 minutes",
      price: "₹2,000 - ₹3,000"
    },
    {
      icon: Users,
      title: "Adolescent Well-being",
      description: "Comprehensive care for teenagers facing emotional and developmental challenges",
      benefits: ["Stress management", "Self-confidence", "Emotional regulation", "Academic support"],
      duration: "60-75 minutes",
      price: "₹1,800 - ₹2,500"
    },
    {
      icon: Heart,
      title: "Women's Healthcare",
      description: "Specialized acupuncture and remedies for women's unique health needs",
      benefits: ["Hormonal balance", "Reproductive health", "Menstrual support", "Menopause care"],
      duration: "60-90 minutes",
      price: "₹1,600 - ₹2,200"
    },
    {
      icon: Sparkles,
      title: "Emotional Healing",
      description: "Deep healing work to address trauma, grief, and emotional blockages",
      benefits: ["Trauma release", "Grief support", "Anxiety relief", "Inner healing"],
      duration: "75-90 minutes",
      price: "₹1,800 - ₹2,800"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Healing Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive natural healing services tailored to your unique needs and wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-healing/20 hover:shadow-lg transition-all duration-300 hover:border-healing/40">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-healing/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-healing" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground text-sm">Benefits:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-healing rounded-full mr-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium text-foreground">{service.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Investment:</span>
                    <span className="font-medium text-healing">{service.price}</span>
                  </div>
                </div>

                <Button variant="healing" className="w-full mt-4">
                  Book Session
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-healing-light/20 to-accent/20 border-healing/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Not Sure Which Service Is Right for You?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book a free 15-minute consultation to discuss your needs and find the perfect healing approach for your journey.
            </p>
            <Button variant="hero" size="lg">
              Free Consultation Call
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;