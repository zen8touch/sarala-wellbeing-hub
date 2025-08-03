import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BlogPreview from "@/components/BlogPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="flex">
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <aside className="hidden lg:block w-80 p-6">
          <BlogPreview />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
