import { ArrowLeft, Zap, Flower, Heart, Brain, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import autismCareImage from "@/assets/autism-care.jpg";
import womensCareImage from "@/assets/womens-care.jpg";

const ServiceDetails = () => {
  const specializations = [
    {
      icon: Brain,
      title: "Autism Spectrum Support",
      subtitle: "Specialized Care for Autism and Developmental Challenges",
      description: "Comprehensive support for individuals with autism spectrum disorders and their families, combining traditional acupuncture with modern therapeutic approaches to promote communication, reduce anxiety, and improve overall quality of life.",
      image: autismCareImage,
      features: [
        "Sensory integration therapy",
        "Behavioral support strategies",
        "Communication enhancement",
        "Family counseling and guidance",
        "Customized treatment plans",
        "Holistic developmental support"
      ],
      outcomes: [
        "Improved communication skills",
        "Better sensory processing",
        "Reduced anxiety and stress",
        "Enhanced social interactions",
        "Increased independence",
        "Family harmony and understanding"
      ]
    },
    {
      icon: Heart,
      title: "Women's Wellness",
      subtitle: "Comprehensive Healthcare for Every Stage of Life",
      description: "Specialized acupuncture and natural remedies designed specifically for women's health needs, addressing hormonal balance, reproductive health, and life transitions with gentle, effective treatments.",
      image: womensCareImage,
      features: [
        "Hormonal balance treatments",
        "Fertility support programs",
        "Pregnancy and postpartum care",
        "Menopause management",
        "Stress reduction techniques",
        "Emotional wellness support"
      ],
      outcomes: [
        "Balanced hormones",
        "Improved fertility",
        "Comfortable pregnancy",
        "Smooth menopause transition",
        "Enhanced emotional well-being",
        "Better overall health"
      ]
    },
    {
      icon: Users,
      title: "Adolescent Care",
      subtitle: "Supporting Teenagers Through Growth and Change",
      description: "Specialized support for teenagers navigating the challenges of adolescence, addressing both physical and emotional needs during this crucial developmental stage.",
      image: autismCareImage,
      features: [
        "Stress management for teens",
        "Academic performance support",
        "Emotional regulation techniques",
        "Self-confidence building",
        "Anxiety and depression support",
        "Healthy lifestyle guidance"
      ],
      outcomes: [
        "Better stress management",
        "Improved academic performance",
        "Enhanced self-confidence",
        "Emotional stability",
        "Healthy coping mechanisms",
        "Positive life direction"
      ]
    },
    {
      icon: Sparkles,
      title: "Emotional Healing",
      subtitle: "Deep Healing for Mind and Spirit",
      description: "Comprehensive emotional healing services that address trauma, grief, anxiety, and other emotional challenges through a combination of acupuncture, flower remedies, and therapeutic support.",
      image: womensCareImage,
      features: [
        "Trauma-informed care",
        "Grief and loss support",
        "Anxiety management",
        "Depression treatment",
        "PTSD therapy",
        "Emotional release techniques"
      ],
      outcomes: [
        "Emotional freedom",
        "Reduced anxiety and depression",
        "Trauma recovery",
        "Inner peace and clarity",
        "Improved relationships",
        "Renewed sense of purpose"
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Healing Service Details
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our specialized healing services designed to support your unique journey toward wellness and growth.
          </p>
        </div>

        {/* Specializations Grid */}
        <div className="space-y-16">
          {specializations.map((specialization, index) => (
            <Card key={index} className="overflow-hidden border-healing/20">
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={specialization.image}
                    alt={specialization.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-healing/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className={`p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-healing/10 rounded-full flex items-center justify-center mr-4">
                      <specialization.icon className="h-6 w-6 text-healing" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{specialization.title}</h3>
                      <p className="text-healing font-medium">{specialization.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {specialization.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">What We Offer:</h4>
                      <ul className="space-y-2">
                        {specialization.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-healing rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Expected Outcomes:</h4>
                      <ul className="space-y-2">
                        {specialization.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetails;