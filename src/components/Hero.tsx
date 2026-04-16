import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-golden/5 pointer-events-none" />
      
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <div className="text-6xl mb-6">☀️</div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          George Ngiye's Portfolio
        </h1>
        
        <h2 className="text-xl md:text-2xl text-primary font-semibold mb-8 italic">
          | On earth to create|
        </h2>

        <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-10 text-left shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div className="space-y-1 text-base md:text-lg text-foreground leading-relaxed">
              <p>
                <strong>George Ngiye</strong> is my name. My friends call me <strong>Prof</strong> 😊
              </p>
              <p>
                I am baked in a fantastic pie of paradoxes: <span className="text-primary font-medium">Analytical yet Creative, Quiet yet Opinionated, Focused yet Dreamy, Messy yet Somehow Great at Design, Player in Numbers.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-base md:text-lg text-foreground/90 leading-relaxed text-left max-w-2xl mx-auto mb-12">
          <p>A builder by nature and intentional nurture.</p>
          
          <p>
  Excited by experiments, data, and technology: blending data science into software engineering — teaching numbers to talk, making servers behave, and turning ideas into products before overthinking them.
</p>

          <p>
            I will brag a bit 🙈 if that makes you uncomfortable, this is your cue to close the tab:
          </p>

          <p>
            I've built web apps, data pipelines, and ML models that people actually use or will use (shocking, I know). From <strong>policy simulation platforms</strong> to <strong>AI-powered an AI-powered route optimizer</strong> — if it involves data or runs on the web, I've probably tried to build it at 2am.
          </p>

         <p>
  A core strength of mine is turning vague ideas into working software — I once built an entire MVP in a weekend fueled by nothing but ambition and instant coffee... only for it to crash majestically on presentation day.
</p>

          <p>
            I often forget to mention that I started coding by breaking every system I touched. My debugging skills only blossomed since then.
          </p>

          <p className="text-primary font-medium italic">
            Just in case you were wondering, 'Ngiye' means 'Great' in Dholuo. And Great... always building. 🌻
          </p>
        </div>

        <p className="text-muted-foreground mb-8 text-base">
          Travel the journey below to see some of my successes (and the bugs I pretend don't exist).
        </p>
      </div>
    </section>
  );
};

export default Hero;
