import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-golden/5 pointer-events-none" />
      
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <div className="text-6xl mb-6">☀️</div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          George Ngiye's Portfolio
        </h1>
        
        <h2 className="text-xl md:text-2xl text-primary font-semibold mb-8 italic">
          | On earth to build & break things (mostly build) |
        </h2>

        <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-10 text-left shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div className="space-y-1 text-base md:text-lg text-foreground leading-relaxed">
              <p>
                <strong>George Otieno Ngiye</strong> is my name. My friends call me <strong>Ngiye-dev</strong> 😊
              </p>
              <p>
                I am baked in a beautiful pie of paradoxes: <span className="text-primary font-medium">Coder yet Creative, Quiet yet Opinionated, Caffeinated yet Always Sleepy.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-base md:text-lg text-foreground/90 leading-relaxed text-left max-w-2xl mx-auto mb-12">
          <p>A developer by nature and intentional nurture.</p>
          
          <p>
            Excited by clean code, side projects that never ship, and technology: hence a <strong>Full-Stack Web Developer</strong> by profession and a <strong>serial builder</strong> by compulsion.
          </p>

          <p>
            I will brag a bit 🙈 if that makes you uncomfortable, this is your cue to close the tab:
          </p>

          <p>
            I've built web apps that people actually use (shocking, I know). From <strong>policy tracking platforms</strong> to <strong>AI-powered property finders</strong> — if it runs on the web, I've probably tried to build it at 2am.
          </p>

          <p>
            A core strength of mine is turning vague ideas into working software — I once built an entire MVP in a weekend fueled by nothing but ambition and instant coffee.
          </p>

          <p>
            I often forget to mention that I started coding by breaking every website I touched. My debugging skills only blossomed since then.
          </p>

          <p className="text-primary font-medium italic">
            Just in case you were wondering, 'Ngiye' means 'I am' in Swahili. And I am... always coding. 🌻
          </p>
        </div>

        <p className="text-muted-foreground mb-8 text-base">
          Travel the journey below to see some of my successes (and the bugs I pretend don't exist).
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="text-base gap-2">
            <Link to="/projects">View My Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base gap-2">
            <a href="mailto:georgengiye3@gmail.com">
              <Mail className="h-4 w-4" />
              Email Me →
            </a>
          </Button>
        </div>

        <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
