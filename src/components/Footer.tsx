import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const services = [
    "Traditional Acupuncture",
    "Bach Flower Remedies",
    "Autism Spectrum Support",
    "Adolescent Well-being",
    "Women's Healthcare",
    "Emotional Healing"
  ];

  const quickLinks = [
    { name: "About Dr. Sarala", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Specializations", href: "#specializations" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "Book Consultation", href: "#contact" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-healing" />
              <div>
                <h3 className="text-xl font-bold">Dr. Sarala M.D.</h3>
                <p className="text-sm text-background/80">Acupuncture & Healing Specialist</p>
              </div>
            </div>
            <p className="text-background/80 max-w-md">
              Transforming lives through natural healing, specialized care for autism, 
              adolescent well-being, women's health, and emotional balance. Based in Chennai, 
              providing compassionate care through appointment-based practice.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-healing" />
                <span>Block 51/Villa 7 Bollineni Hillside, Chennai 600126</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-healing" />
                <span>+91 98846-44331</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-healing" />
                <span>Zentouchq@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-healing transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-healing transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div className="py-8 border-t border-background/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-semibold mb-2">Stay Connected</h4>
              <p className="text-sm text-background/80 mb-4">
                Subscribe to our newsletter for healing tips, wellness insights, and updates.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded text-sm placeholder:text-background/60"
                />
                <Button variant="healing" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="md:text-right">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex md:justify-end space-x-4">
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-healing/20 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-healing/20 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-healing/20 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-background/20 flex flex-col md:flex-row justify-between items-center text-sm text-background/80">
          <p>© 2024 Dr. Sarala M.D. Healing Practice. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-healing transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-healing transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-healing transition-colors">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;