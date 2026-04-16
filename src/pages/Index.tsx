import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedProjects from "@/components/FeaturedProjects";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
            I've spent the last few years building products that sit at the intersection of real-world problems and clean code — from designing policy tracking systems to shipping AI-powered features that help people find homes.
          </p>
          <p>
            Starting projects from scratch taught me something no tutorial could: what it really means to own a problem from zero. That restlessness, that bias for action, that refusal to wait for permission — I carry it into every line of code.
          </p>
        </div>
      </section>

      <FeaturedProjects />
      <Stats />

      {/* CTA Section */}
      <section className="py-20 px-4 text-center border-t border-border">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Reach out to me here</h2>
          <p className="text-muted-foreground mb-8">
            Whether you need a website, a web app, or someone to debug your existential crisis (software-related only, please).
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
