
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogPreview from "@/components/BlogPreview";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SocialSkillEvaluation = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background py-8">
        <div className="flex">
          <main className="flex-1">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <Link to="/" className="inline-flex items-center text-healing hover:text-healing/80 mb-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
                <h1 className="text-3xl font-bold text-foreground">Social Skill Evaluation</h1>
                <p className="text-muted-foreground mt-2">
                  Assessment tool for evaluating social interaction skills and abilities.
                </p>
              </div>

              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Coming Soon</h2>
                  <p className="text-muted-foreground mb-8">
                    We're working on bringing you a comprehensive social skill evaluation tool. 
                    Please check back soon!
                  </p>
                  <Link 
                    to="/" 
                    className="inline-flex items-center text-healing hover:text-healing/80 font-medium"
                  >
                    Return to Home
                  </Link>
                </div>
              </div>
            </div>
          </main>
          <aside className="hidden lg:block w-80 p-6">
            <BlogPreview />
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SocialSkillEvaluation;
