import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
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
  }
];

const BlogPreview = () => {
  return (
    <div className="bg-card border rounded-lg p-6 sticky top-24">
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
            <Card className="border-0 shadow-none hover:shadow-sm transition-shadow">
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
  );
};

export default BlogPreview;