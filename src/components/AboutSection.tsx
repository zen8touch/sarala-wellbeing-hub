import { Heart, Brain, Flower2, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every patient receives personalized attention with deep empathy and understanding"
    },
    {
      icon: Brain,
      title: "Evidence-Based",
      description: "Combining traditional acupuncture with modern research for optimal outcomes"
    },
    {
      icon: Flower2,
      title: "Holistic Approach",
      description: "Treating the whole person - mind, body, and spirit for complete wellness"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Creating a secure, judgment-free space for healing and transformation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-healing-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Dr. Sarala MD. Acu.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A dedicated healing practitioner with over 15 years of experience in acupuncture, 
            Bach flower remedies, and specialized care for autism and adolescent well-being.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Transforming Lives Through Natural Healing
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Dr. Sarala brings a unique combination of traditional acupuncture techniques 
                and modern therapeutic approaches to healing. With specialized training in 
                Bach flower remedies and extensive experience in autism spectrum support, 
                she offers comprehensive care that goes beyond conventional treatment methods.
              </p>
              <p>
                As a practitioner in Chennai operating by appointment only, Dr. Sarala offers personalized care 
                that addresses not just symptoms, but the root causes of health challenges. 
                Her holistic approach combines ancient wisdom with contemporary understanding 
                to create effective, lasting healing experiences.
              </p>
              <p>
                Beyond individual treatments, Dr. Sarala is passionate about women's healthcare,
                providing specialized support for hormonal balance, reproductive health, 
                and emotional well-being throughout all life stages.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-healing/20 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto bg-healing/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-healing" />
                  </div>
                  <h4 className="font-semibold text-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="bg-card rounded-lg p-8 border border-healing/20">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Qualifications & Certifications
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="font-medium text-foreground">Licensed Acupuncturist</h4>
              <p className="text-sm text-muted-foreground">Certified Traditional Chinese Medicine</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground">Bach Flower Practitioner</h4>
              <p className="text-sm text-muted-foreground">Floral acupuncturist</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground">Autism Specialist</h4>
              <p className="text-sm text-muted-foreground">Specialized Training in ASD Care</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground">Certified Life Coach</h4>
              <p className="text-sm text-muted-foreground">Personal Development & Wellness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;