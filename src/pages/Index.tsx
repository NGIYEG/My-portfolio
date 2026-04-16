import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const speakingOpportunities = [
  {
    title: "Tech Meetup Nairobi",
    event: "Community Talk",
    topic: "Building AI-Powered Applications in East Africa",
    date: "2025",
  },
  {
    title: "University Guest Lecture",
    event: "Academic",
    topic: "From Student to Full-Stack Developer: A Career Path",
    date: "2024",
  },
];

const awards = [
  {
    title: "Hackathon Winner",
    organization: "Local Tech Community",
    description: "First place for building an innovative policy tracking MVP in 48 hours.",
    year: "2025",
  },
  {
    title: "Top Contributor",
    organization: "Open Source Community",
    description: "Recognized for consistent contributions to open source projects.",
    year: "2024",
  },
];

const Index = () => {
  return (
    <main>
      <Hero />

      {/* Personal touches section */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-2xl space-y-6 text-base md:text-lg text-foreground/90 leading-relaxed">
          <p>
            When I'm not working, I'm probably reading tech docs (for fun, don't judge), running 🏃, or convincing my friends that my next side project will definitely be the one.
          </p>
          <p>
            My favorite things in the world: <strong>my family</strong>, <strong>a good API response</strong>, and <strong>dark mode</strong>.
          </p>
          <p>
            Now that you know a bit about me, here is a bit about my work:
          </p>
          <p>
            I've spent the last few years building products that sit at the intersection of real-world problems and clean code — from designing policy tracking systems to shipping AI-powered features that help people find homes, to crunching data that tells stories no one else sees.
          </p>
          <p>
            Starting projects from scratch taught me something no tutorial could: what it really means to own a problem from zero. That restlessness, that bias for action, that refusal to wait for permission — I carry it into every line of code and every dataset I touch.
          </p>
        </div>
      </section>

      {/* My Product Portfolio */}
      <FeaturedProjects />

      {/* TV & Speaking Opportunities */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">TV Appearances & Speaking Opportunities</h2>
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
        </div>
      </section>

      {/* Reach out to me here */}
      <section className="py-20 px-4 text-center border-t border-border">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Reach out to me here</h2>
          <p className="text-muted-foreground mb-8">
            Whether you need a website, a data pipeline, an ML model, or someone to debug your existential crisis (software-related only, please).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <a href="mailto:georgengiye3@gmail.com">📨 Email Me →</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Form</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
