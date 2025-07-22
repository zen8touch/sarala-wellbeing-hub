import { ArrowRight, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-healing.jpg";
import drSaralaImage from "@/assets/dr-sarala-professional.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Patients Healed" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Patient Rating" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Healing Environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-healing-light text-healing text-sm font-medium">
                🌿 Holistic Healing Specialist
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Natural Healing with</span>
                <br />
                <span className="text-healing">Dr. Sarala</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Specialized acupuncturist offering transformative healing for autism, 
                adolescent well-being, women's healthcare, and emotional balance through 
                ancient wisdom and modern techniques.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                AI Healing Chat
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-healing" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor Image Card */}
          <div className="lg:justify-self-end">
            <Card className="p-6 bg-card/95 backdrop-blur-sm border-healing/20 shadow-lg">
              <div className="text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  <img
                    src={drSaralaImage}
                    alt="Dr. Sarala"
                    className="w-full h-full object-cover rounded-full border-4 border-healing"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-healing text-primary-foreground rounded-full p-2">
                    <Award className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Dr. Sarala</h3>
                  <p className="text-muted-foreground">Licensed Acupuncturist</p>
                  <p className="text-sm text-muted-foreground">Chennai, Tamil Nadu</p>
                </div>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-warm fill-warm" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Dedicated to healing minds, bodies, and spirits through 
                  compassionate holistic care."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;