import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogPreview from "@/components/BlogPreview";

const Assessment = () => {
  const [formData, setFormData] = useState({
    childName: "",
    gender: "",
    age: "",
    dateOfBirth: "",
    completedBy: "",
    relationship: "",
    todaysDate: "",
    speechLanguage: Array(14).fill("N"),
    sociability: Array(20).fill("N"),
    sensoryAwareness: Array(18).fill("N"),
    healthBehavior: Array(25).fill("N")
  });

  const speechLanguageQuestions = [
    "Knows own name",
    "Responds to 'No' or 'Stop'",
    "Can follow some commands",
    "Can use one word at a time (No!, Eat, Water, etc.)",
    "Can use 2 words at a time (Don't want, Go home)",
    "Can use 3 words at a time (Want more milk)",
    "Knows 10 or more words",
    "Can use sentences with 4 or more words",
    "Explains what he/she wants",
    "Asks meaningful questions",
    "Speech tends to be meaningful/relevant",
    "Often uses several successive sentences",
    "Carries on fairly good conversation",
    "Has normal ability to communicate for his/her age"
  ];

  const sociabilityQuestions = [
    "Seems to be in a shell – you cannot reach him/her",
    "Ignores other people",
    "Pays little or no attention when addressed",
    "Uncooperative and resistant",
    "No eye contact",
    "Prefers to be left alone",
    "Shows no affection",
    "Fails to greet parents",
    "Avoids contact with others",
    "Does not imitate",
    "Dislikes being held/cuddled",
    "Does not share or show",
    "Does not wave 'bye bye'",
    "Disagreeable/not compliant",
    "Temper tantrums",
    "Lacks friends/companions",
    "Rarely smiles",
    "Insensitive to other's feelings",
    "Indifferent to being liked",
    "Indifferent if parent(s) leave"
  ];

  const sensoryAwarenessQuestions = [
    "Responds to own name",
    "Responds to praise",
    "Looks at people and animals",
    "Looks at pictures (and T.V.)",
    "Does drawing, coloring, art",
    "Plays with toys appropriately",
    "Appropriate facial expression",
    "Understands stories on T.V.",
    "Understands explanations",
    "Aware of environment",
    "Aware of danger",
    "Shows imagination",
    "Initiates activities",
    "Dresses self",
    "Curious, interested",
    "Venturesome - explores",
    "\"Tuned in\" — Not spacey",
    "Looks where others are looking"
  ];

  const healthBehaviorQuestions = [
    "Bed-wetting",
    "Wets pants/diapers",
    "Soils pants/diapers",
    "Diarrhea",
    "Constipation",
    "Sleep problems",
    "Eats too much/too little",
    "Extremely limited diet",
    "Hyperactive",
    "Lethargic",
    "Hits or injures self",
    "Hits or injures others",
    "Destructive",
    "Sound-sensitive",
    "Anxious/fearful",
    "Unhappy/crying",
    "Seizures",
    "Obsessive speech",
    "Rigid routines",
    "Shouts or screams",
    "Demands sameness",
    "Often agitated",
    "Not sensitive to pain",
    "\"Hooked\" or fixated on certain objects/topics",
    "Repetitive movements (stimming, rocking, etc.)"
  ];

  const handleQuestionChange = (section: string, index: number, value: string) => {
    setFormData(prev => {
      const currentSection = prev[section as keyof typeof prev];
      if (Array.isArray(currentSection)) {
        return {
          ...prev,
          [section]: currentSection.map((item: string, i: number) => 
            i === index ? value : item
          )
        };
      }
      return prev;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Assessment submitted:", formData);
    // Handle form submission here
  };

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
                <h1 className="text-3xl font-bold text-foreground">ATEC Assessment</h1>
                <p className="text-muted-foreground mt-2">
                  This form is intended to measure the effects of treatment. Free scoring of this form is available on the Internet at: www.autism.org
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Child Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Child Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Child's Name</label>
                        <Input 
                          placeholder="First and Last Name"
                          value={formData.childName}
                          onChange={(e) => setFormData(prev => ({...prev, childName: e.target.value}))}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Gender</label>
                        <Select value={formData.gender} onValueChange={(value) => setFormData(prev => ({...prev, gender: value}))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm font-medium">Age</label>
                        <Input 
                          type="number"
                          value={formData.age}
                          onChange={(e) => setFormData(prev => ({...prev, age: e.target.value}))}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Date of Birth</label>
                        <Input 
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => setFormData(prev => ({...prev, dateOfBirth: e.target.value}))}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Today's Date</label>
                        <Input 
                          type="date"
                          value={formData.todaysDate}
                          onChange={(e) => setFormData(prev => ({...prev, todaysDate: e.target.value}))}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Form completed by</label>
                        <Input 
                          value={formData.completedBy}
                          onChange={(e) => setFormData(prev => ({...prev, completedBy: e.target.value}))}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Relationship</label>
                        <Input 
                          value={formData.relationship}
                          onChange={(e) => setFormData(prev => ({...prev, relationship: e.target.value}))}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* I. Speech/Language/Communication */}
                <Card>
                  <CardHeader>
                    <CardTitle>I. Speech/Language/Communication</CardTitle>
                    <p className="text-sm text-muted-foreground">[N] Not true [S] Somewhat true [V] Very true</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {speechLanguageQuestions.map((question, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-sm flex-1">{index + 1}. {question}</span>
                        <div className="flex gap-2 ml-4">
                          {["N", "S", "V"].map((option) => (
                            <label key={option} className="flex items-center gap-1">
                              <input
                                type="radio"
                                name={`speech-${index}`}
                                value={option}
                                checked={formData.speechLanguage[index] === option}
                                onChange={(e) => handleQuestionChange("speechLanguage", index, e.target.value)}
                                className="text-healing"
                              />
                              <span className="text-xs">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* II. Sociability */}
                <Card>
                  <CardHeader>
                    <CardTitle>II. Sociability</CardTitle>
                    <p className="text-sm text-muted-foreground">[N] Not descriptive [S] Somewhat descriptive [V] Very descriptive</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {sociabilityQuestions.map((question, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-sm flex-1">{index + 1}. {question}</span>
                        <div className="flex gap-2 ml-4">
                          {["N", "S", "V"].map((option) => (
                            <label key={option} className="flex items-center gap-1">
                              <input
                                type="radio"
                                name={`sociability-${index}`}
                                value={option}
                                checked={formData.sociability[index] === option}
                                onChange={(e) => handleQuestionChange("sociability", index, e.target.value)}
                                className="text-healing"
                              />
                              <span className="text-xs">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* III. Sensory/Cognitive Awareness */}
                <Card>
                  <CardHeader>
                    <CardTitle>III. Sensory/Cognitive Awareness</CardTitle>
                    <p className="text-sm text-muted-foreground">[N] Not descriptive [S] Somewhat descriptive [V] Very descriptive</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {sensoryAwarenessQuestions.map((question, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-sm flex-1">{index + 1}. {question}</span>
                        <div className="flex gap-2 ml-4">
                          {["N", "S", "V"].map((option) => (
                            <label key={option} className="flex items-center gap-1">
                              <input
                                type="radio"
                                name={`sensory-${index}`}
                                value={option}
                                checked={formData.sensoryAwareness[index] === option}
                                onChange={(e) => handleQuestionChange("sensoryAwareness", index, e.target.value)}
                                className="text-healing"
                              />
                              <span className="text-xs">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* IV. Health/Physical/Behavior */}
                <Card>
                  <CardHeader>
                    <CardTitle>IV. Health/Physical/Behavior</CardTitle>
                    <p className="text-sm text-muted-foreground">[N] Not a Problem [MI] Minor Problem [MO] Moderate Problem [S] Serious Problem</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {healthBehaviorQuestions.map((question, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-sm flex-1">{index + 1}. {question}</span>
                        <div className="flex gap-2 ml-4">
                          {["N", "MI", "MO", "S"].map((option) => (
                            <label key={option} className="flex items-center gap-1">
                              <input
                                type="radio"
                                name={`health-${index}`}
                                value={option}
                                checked={formData.healthBehavior[index] === option}
                                onChange={(e) => handleQuestionChange("healthBehavior", index, e.target.value)}
                                className="text-healing"
                              />
                              <span className="text-xs">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="flex justify-center">
                  <Button type="submit" variant="hero" size="lg">
                    Submit Assessment
                  </Button>
                </div>
              </form>
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

export default Assessment;
