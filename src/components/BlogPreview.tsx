import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight, Brain, Users, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Transform Anxiety into Confidence",
    excerpt: "Harness performance anxiety as a powerful force for success with Zentouch's holistic approach.",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Plantar Fasciitis & Acupuncture",
    excerpt: "Comprehensive guide to healing heel pain with acupuncture and trigger point therapy.",
    date: "2024-08-01",
  },
  {
    id: 3,
    title: "🌸 ZenJi: AI-Powered Emotional Healing",
    excerpt: "Discover ZenJi's innovative approach to emotional well-being through personalized Bach Flower Essences.",
    date: "2024-12-01",
  },
  {
    id: 4,
    title: "Mathangi Mudra: Yogic Balance for Blood Sugar",
    excerpt: "A simple hand gesture from yogic tradition that helps regulate blood sugar and calms post-meal giddiness.",
    date: "2024-12-05",
  }
];

const assessments = [
  {
    id: 1,
    title: "Autism Treatment Evaluation",
    icon: Brain,
    link: "/assessment",
    available: true
  },
  {
    id: 2,
    title: "Social Skill Evaluation",
    icon: Users,
    link: "/social-skill-evaluation",
    available: false
  },
  {
    id: 3,
    title: "Adolescent Self Awareness",
    icon: Heart,
    link: "/adolescent-self-awareness",
    available: false
  },
  {
    id: 4,
    title: "Self Care Check",
    icon: CheckCircle,
    link: "/self-care-check",
    available: false
  }
];

const BlogPreview = () => {
  return (
    <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 sticky top-24 space-y-6">
      {/* Blog Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground">Latest Insights</h3>
          <Link 
            to="/blog" 
            className="text-healing hover:text-healing/80 transition-colors text-sm font-medium flex items-center gap-1"
          >
            View All
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Link key={post.id} to="/blog" className="block group">
              <Card className="bg-background/80 border-border/30 shadow-soft hover:shadow-healing/20 transition-all duration-300">
                <CardHeader className="p-4">
                  <CardTitle className="text-sm font-semibold text-foreground group-hover:text-healing transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-xs text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Assessment Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-foreground">Assessments</h3>
        </div>
        
        <div className="space-y-3">
          {assessments.map((assessment) => (
            <Link 
              key={assessment.id} 
              to={assessment.link} 
              className={`block group ${!assessment.available ? 'cursor-not-allowed opacity-60' : ''}`}
            >
              <Card className="bg-background/80 border-border/30 shadow-soft hover:shadow-healing/20 transition-all duration-300">
                <CardHeader className="p-3">
                  <div className="flex items-center gap-2">
                    <assessment.icon className="w-4 h-4 text-healing" />
                    <CardTitle className="text-sm font-semibold text-foreground group-hover:text-healing transition-colors">
                      {assessment.title}
                    </CardTitle>
                  </div>
                  {!assessment.available && (
                    <p className="text-xs text-muted-foreground">Coming Soon</p>
                  )}
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
