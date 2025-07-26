import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Block 51/Villa 7 Bollineni Hillside", "Nogampalayyam main road, Sithalapkkam", "Chennai 600126"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98846-44331", "Appointment only", "Quick response guaranteed"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["Zentouchq@gmail.com", "Quick response guaranteed", "Secure communication"]
    },
    {
      icon: Clock,
      title: "Availability",
      details: ["By appointment only"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your healing journey? Reach out for a consultation or to learn more about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-healing/20">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-healing/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-healing" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Actions */}
            <div className="space-y-3 pt-4">
              <Button variant="healing" className="w-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Chat
              </Button>
              <Button variant="outline" className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                Online Booking
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-healing/20">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name *</label>
                    <Input placeholder="Your full name" className="border-healing/20 focus:border-healing" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email *</label>
                    <Input type="email" placeholder="your@email.com" className="border-healing/20 focus:border-healing" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input placeholder="+91 XXXXX XXXXX" className="border-healing/20 focus:border-healing" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service Interest</label>
                    <Select>
                      <SelectTrigger className="border-healing/20 focus:border-healing">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="acupuncture">Traditional Acupuncture</SelectItem>
                        <SelectItem value="bach-flower">Bach Flower Remedies</SelectItem>
                        <SelectItem value="autism">Autism Spectrum Support</SelectItem>
                        <SelectItem value="adolescent">Adolescent Well-being</SelectItem>
                        <SelectItem value="womens">Women's Healthcare</SelectItem>
                        <SelectItem value="emotional">Emotional Healing</SelectItem>
                        <SelectItem value="consultation">Free Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea 
                    placeholder="Please describe your health concerns, goals, or questions..."
                    className="border-healing/20 focus:border-healing min-h-[120px]"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="privacy" className="mt-1" />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      I agree to the privacy policy and consent to being contacted about my inquiry. 
                      All health information will be kept strictly confidential.
                    </label>
                  </div>

                  <Button variant="healing" size="lg" className="w-full">
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map placeholder and additional info */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-healing-light/10 to-accent/10 border-healing/20">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Serving Chennai & Surrounding Areas
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Located at Bollineni Hillside, Sithalapkkam. Appointment-based practice for 
                personalized care and attention to your healing journey.
              </p>
              <div className="grid md:grid-cols-1 gap-6 text-center">
                <div>
                  <h4 className="font-medium text-foreground">Zentouch Healing Practice</h4>
                  <p className="text-sm text-muted-foreground">Dr. Sarala M.D. Acu.</p>
                  <p className="text-sm text-muted-foreground">Regn. No. 200 - Tamilnadu Acupuncture Council</p>
                  <p className="text-sm text-muted-foreground">Block 51/Villa 7, Bollineni Hillside</p>
                  <p className="text-sm text-muted-foreground">Nogampalayyam main road, Sithalapkkam</p>
                  <p className="text-sm text-muted-foreground">Chennai 600126</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;