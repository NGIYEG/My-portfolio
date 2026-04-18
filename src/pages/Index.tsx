import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const speakingOpportunities = [
  // {
  //   title: "Tech Meetup Nairobi",
  //   event: "Community Talk",
  //   topic: "Building AI-Powered Applications in East Africa",
  //   date: "2025",
  // },
];

const awards = [
  // {
  //   title: "Hackathon Winner",
  //   organization: "Local Tech Community",
  //   description: "First place for building an innovative policy tracking MVP in 48 hours.",
  //   year: "2025",
  // },
];

const Index = () => {
  return (
    <main>
      <Hero />

      {/* My Product Portfolio */}
      <FeaturedProjects />

      {/* TV & Speaking Opportunities */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Events Appearances & Speaking Opportunities</h2>
            <p className="text-muted-foreground">Sharing knowledge beyond the keyboard.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {speakingOpportunities.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{item.event}</Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {speakingOpportunities.length === 0 && (
            <p className="text-center text-muted-foreground italic">More coming soon... 🎤</p>
          )}
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards</h2>
            <p className="text-muted-foreground">Recognition along the journey.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-golden/20 text-golden border-golden/30">🏆 {award.year}</Badge>
                  </div>
                  <CardTitle className="text-xl">{award.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-primary mb-2">{award.organization}</p>
                  <p className="text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {awards.length === 0 && (
            <p className="text-center text-muted-foreground italic">More coming soon... 🏆</p>
          )}
        </div>
      </section>

      {/* Reach out to me here */}
      <section className="py-20 px-4 text-center border-t border-border">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Reach out to me here</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <a href="mailto:georgengiye3@gmail.com">📨 Email Me →</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
