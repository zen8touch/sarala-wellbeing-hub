import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Unlock Your Peak Performance: Transforming Anxiety into Confidence with Zentouch",
    excerpt: "Performance anxiety is a universal experience. At Zentouch, we believe it's not something to fear—but a powerful force you can harness for success.",
    date: "2024-01-15",
    author: "Dr. Sarala",
    content: `
If you've ever felt your heart racing before stepping onto a stage, your palms sweating before an important meeting, or your voice trembling just as you begin a presentation, you're not alone. Performance anxiety is a universal experience. At Zentouch, we believe it's not something to fear—but a powerful force you can harness for success.

## The Science Behind Performance Anxiety

At the core of our response to stress is the **amygdala**, often called the "fear center" of the brain. When you face a high-pressure situation, the amygdala triggers the fight-or-flight response, releasing a surge of adrenaline. This causes:

- **Racing heartbeat and pounding pulse**
- **Shaky hands and trembling voice**
- **Dry mouth and even nausea**
- **Excessive sweating and a tight throat**

In moderation, anxiety heightens focus and fuels performance. But if it takes over, it can feed self-doubt and drain your **self-efficacy**—the belief in your ability to succeed. Studies confirm that when anxiety rises, confidence and performance often dip.

## Anxiety Isn't Your Enemy—It's Your Superpower

At Zentouch, we encourage clients to **reframe anxiety as a source of energy, not weakness**. Here's how you can turn nerves into your greatest advantage:

### 1. Channel the Energy

Instead of fighting the butterflies in your stomach, **reframe anxiety as excitement**. This mental shift not only reduces fear but taps adrenaline to boost your performance. Adopting a "challenge" mindset, rather than a "threat" mindset, increases confidence and resilience.

### 2. Achieve Mind-Body Balance

Scientific research backs up the benefits of holistic therapies like **acupuncture**. Acupuncture has been shown to:

- **Reduce stress levels**
- **Calm nerves**
- **Improve focus and clarity**

Many Zentouch clients experience a tangible drop in anxiety, enhanced self-efficacy, and even improved academic, athletic, or workplace performance after acupuncture and integrated mindfulness practices.

### 3. Build Self-Efficacy Through Small Wins

Every success—even minor—builds self-efficacy. Acknowledge your achievements, keep a record of your progress, and approach challenges as opportunities for growth. Over time, these **small wins stack up**, creating a foundation of real confidence.

### 4. Make Anxiety Your Career Ally

The workplace is one of the most common arenas for performance anxiety, especially during appraisals or reviews. But anxiety, when harnessed, can fuel clear thinking and decisive action. Prepare by owning your wins, backing up your impact with data, and adopting proven stress-reduction practices.

## Zentouch—Your Partner in Transforming Performance Anxiety

At Zentouch, we offer professional acupuncture, mindfulness, and coaching sessions designed to help you:

- **Reframe stress for peak performance**
- **Boost self-efficacy and confidence**
- **Stay composed and focused, even under pressure**

Whether you're about to make a big presentation, aiming for your best game, or prepping for a crucial career moment, we're here to support your journey—from anxiety to achievement.

**Ready to perform with confidence?**  
Book a session at Zentouch today and start turning nerves into your secret weapon.

**How do you turn nerves into confidence? Share your strategies below!**  
#PerformanceAnxiety #MindsetMatters #ConfidenceBoost #ZentouchSuccess #AcupunctureForClarity
    `
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const handlePostSelect = (postId: number) => {
    setSelectedPost(postId);
  };

  const handleBackToIndex = () => {
    setSelectedPost(null);
  };

  const formatContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="text-2xl font-bold text-foreground mt-8 mb-4">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="text-xl font-semibold text-foreground mt-6 mb-3">
            {line.substring(4)}
          </h3>
        );
      } else if (line.startsWith('- **')) {
        elements.push(
          <li key={key++} className="ml-6 mb-2 text-muted-foreground">
            {line.substring(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
          </li>
        );
      } else if (line.includes('**')) {
        elements.push(
          <p key={key++} className="mb-4 text-muted-foreground leading-relaxed">
            <span dangerouslySetInnerHTML={{
              __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
            }} />
          </p>
        );
      } else if (line.trim() === '') {
        // Skip empty lines
      } else {
        elements.push(
          <p key={key++} className="mb-4 text-muted-foreground leading-relaxed">
            {line}
          </p>
        );
      }
    }

    return elements;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {selectedPost === null ? (
            // Blog Index
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
                  <p className="text-muted-foreground">
                    Insights and tips for natural healing and wellness
                  </p>
                </div>
                <Link to="/">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                  </Button>
                </Link>
              </div>

              <div className="grid gap-6">
                {blogPosts.map((post) => (
                  <Card 
                    key={post.id} 
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => handlePostSelect(post.id)}
                  >
                    <CardHeader>
                      <CardTitle className="text-xl hover:text-healing transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            // Blog Post Detail
            <div>
              <div className="mb-8">
                <Button 
                  variant="outline" 
                  onClick={handleBackToIndex}
                  className="flex items-center gap-2 mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog Index
                </Button>
                
                {(() => {
                  const post = blogPosts.find(p => p.id === selectedPost);
                  if (!post) return null;
                  
                  return (
                    <article className="prose prose-lg max-w-none">
                      <header className="mb-8">
                        <h1 className="text-4xl font-bold text-foreground mb-4">
                          {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                        </div>
                      </header>
                      
                      <div className="prose-content">
                        {formatContent(post.content)}
                      </div>
                    </article>
                  );
                })()}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;