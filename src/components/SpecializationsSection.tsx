import { Brain, Heart, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import autismCareImage from "@/assets/autism-care.jpg";
import womensCareImage from "@/assets/womens-care.jpg";

const SpecializationsSection = () => {
  const specializations = [
    {
      icon: Brain,
      title: "Autism Spectrum Disorders",
      subtitle: "Comprehensive ASD Support",
      description: "Specialized acupuncture and Bach flower treatments designed specifically for individuals on the autism spectrum. Our approach focuses on sensory integration, behavioral support, and improving communication skills.",
      image: autismCareImage,
      features: [
        "Sensory processing support",
        "Behavioral regulation techniques",
        "Communication enhancement",
        "Family education and support",
        "Individualized treatment plans",
        "Safe, calming environment"
      ],
      outcomes: "Improved focus, reduced anxiety, better social interaction, enhanced communication"
    },
    {
      icon: Users,
      title: "Adolescent Well-being",
      subtitle: "Supporting Teen Mental Health",
      description: "Teenagers face unique emotional and physical challenges. Our specialized treatments help adolescents navigate stress, anxiety, academic pressure, and identity development during these crucial years.",
      image: womensCareImage,
      features: [
        "Stress and anxiety management",
        "Academic performance support",
        "Self-esteem building",
        "Emotional regulation training",
        "Social skills development",
        "Confidential, teen-friendly approach"
      ],
      outcomes: "Better emotional balance, improved confidence, reduced stress, enhanced academic performance"
    },
    {
      icon: Heart,
      title: "Women's Healthcare",
      subtitle: "Holistic Feminine Wellness",
      description: "Comprehensive care addressing women's unique health needs throughout all life stages. From hormonal balance to reproductive health, we provide gentle, effective natural healing solutions.",
      image: womensCareImage,
      features: [
        "Menstrual cycle regulation",
        "Fertility support",
        "Pregnancy and postpartum care",
        "Menopause symptom relief",
        "Hormonal balance restoration",
        "Emotional well-being support"
      ],
      outcomes: "Balanced hormones, reduced PMS symptoms, improved fertility, better menopause experience"
    },
    {
      icon: Sparkles,
      title: "Emotional Healing",
      subtitle: "Deep Trauma & Grief Work",
      description: "Specialized treatments for processing trauma, grief, and deep emotional wounds. Using gentle Bach flower remedies and targeted acupuncture to support emotional release and healing.",
      image: autismCareImage,
      features: [
        "Trauma-informed care",
        "Grief counseling support",
        "PTSD symptom relief",
        "Anxiety and depression treatment",
        "Emotional blockage release",
        "Inner child healing work"
      ],
      outcomes: "Emotional freedom, reduced trauma symptoms, improved mental clarity, inner peace"
    }
  ];

  return (
    <section id="specializations" className="py-20 bg-healing-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Areas of Specialization
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Focused expertise in specialized areas where natural healing can make the most profound difference
          </p>
        </div>

        <div className="space-y-16">
          {specializations.map((spec, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-healing/10 rounded-full flex items-center justify-center">
                      <spec.icon className="h-6 w-6 text-healing" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{spec.title}</h3>
                      <p className="text-healing font-medium">{spec.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{spec.description}</p>
                </div>

                <Card className="border-healing/20">
                  <CardHeader>
                    <CardTitle className="text-lg">What We Offer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-2">
                      {spec.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-healing rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-accent/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Expected Outcomes:</h4>
                  <p className="text-sm text-muted-foreground">{spec.outcomes}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="healing">
                    Book Assessment
                  </Button>
                  <Button variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card className="p-8 bg-gradient-to-r from-healing/10 to-primary-glow/10 border-healing/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Each person's path to wellness is unique. Let's work together to create a personalized 
              treatment plan that addresses your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" size="lg">
                Take Wellness Assessment
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;