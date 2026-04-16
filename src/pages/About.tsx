import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ExternalLink, GitBranch, Star } from "lucide-react";
import { useState, useEffect } from "react";
import profileImage from "@/assets/george-profile.jpg";
import resumePDF from "@/assets/resume.pdf";

interface GitHubEvent {
  id: string;
  type: string;
  actor: { login: string };
  repo: { name: string };
  payload: {
    ref?: string;
    action?: string;
  };
  created_at: string;
}

const About = () => {
  const [githubEvents, setGithubEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubActivity = async () => {
      try {
        const response = await fetch("https://api.github.com/users/NGIYEG/events/public?per_page=10");
        if (!response.ok) throw new Error("Failed to fetch GitHub events");
        const data = await response.json();
        setGithubEvents(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubActivity();
  }, []);

  const techStack = [
    "React", "Next.js", "TypeScript", "Node.js",
    "Python", "Django", "PostgreSQL", "MongoDB",
    "Tailwind CSS", "Firebase", "Supabase", "Git", "Docker"
  ];

  const careerJourney = [
    {
      year: "2023 - Present",
      title: "Full-Stack Web Developer",
      description: "Building modern web applications and delivering innovative solutions for clients across various industries. Also consuming unhealthy amounts of coffee."
    },
    {
      year: "2025 - Present",
      title: "PoliagentX Development",
      description: "Created a policy tracking and monitoring platform that tracks government spending and development outcomes. Because someone has to keep the receipts 🧾"
    },
    {
      year: "2025",
      title: "Nestify Platform",
      description: "Developed an AI-powered house mapping platform with intelligent location recommendations. Helping people find homes so they don't have to live in their code editors."
    }
  ];

  const getEventIcon = (type: string) => {
    if (type.includes("Push")) return <GitBranch className="h-4 w-4" />;
    if (type.includes("Star")) return <Star className="h-4 w-4" />;
    return <GitBranch className="h-4 w-4" />;
  };

  const getEventDescription = (event: GitHubEvent) => {
    const { type, payload, repo } = event;
    const repoName = repo.name;
    if (type === "PushEvent") return `pushed to ${payload.ref?.split("/").pop()} in ${repoName}`;
    if (type === "CreateEvent") return `created a branch in ${repoName}`;
    if (type === "WatchEvent") return `starred ${repoName}`;
    if (type === "PullRequestEvent") return `${payload.action} pull request in ${repoName}`;
    return `${type} in ${repoName}`;
  };

  const getTimeAgo = (date: string) => {
    const now = new Date();
    const eventDate = new Date(date);
    const diffDays = Math.floor((now.getTime() - eventDate.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "today";
    if (diffDays === 1) return "1 day ago";
    return `${diffDays} days ago`;
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "George-Otieno-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen pt-24 px-4 pb-16">
      <div className="container mx-auto max-w-3xl">
        {/* Intro */}
        <div className="text-center mb-16">
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src={profileImage}
                alt="George Otieno Ngiye"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Origin Story 🦸‍♂️
          </h1>
          <p className="text-primary text-lg italic">
            (Every developer has one. Mine involves a broken HTML page and pure stubbornness.)
          </p>
        </div>

        {/* Story */}
       <div className="space-y-6 text-base md:text-lg text-foreground/90 leading-relaxed mb-16">
  <p>
    My journey into tech started with curiosity,wondering how websites, apps, and systems actually worked behind the scenes. What began as simple experiments quickly turned into a genuine obsession with building things.
  </p>

  <p>
    Since then, I’ve grown into a techy who enjoys both the visual side of products and the logic that powers them underneath. I like creating experiences that look clean, feel smooth, and work reliably.
  </p>

 

  <p>
    I care deeply about writing clean code, improving performance, and designing systems that can scale. I also enjoy blending software engineering with data-driven thinking whenever it adds value.
  </p>

  <p className="text-primary font-medium italic">
    Fun fact: I can spend hours debugging a tiny issue, then celebrate like I launched a rocket when it finally works. 😂
  </p>
</div>

        <div className="text-center mb-16">
          <Button onClick={handleDownloadResume} className="gap-2" size="lg">
            <Download className="h-4 w-4" />
            Download Resume
          </Button>
        </div>

        {/* GitHub Activity */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-center">GitHub Activity</h2>
          <p className="text-muted-foreground text-center mb-8">Proof that I actually code and don't just talk about it.</p>

          {loading ? (
            <div className="text-center text-muted-foreground py-8">Loading GitHub activity...</div>
          ) : error ? (
            <div className="text-center text-destructive py-8">Failed to load GitHub activity (the irony)</div>
          ) : (
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xl font-bold">📍 Latest Public Events</span>
                </div>

                <div className="space-y-4">
                  {githubEvents.slice(0, 6).map((event) => (
                    <div key={event.id} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                      <div className="text-primary mt-1">{getEventIcon(event.type)}</div>
                      <div className="flex-1">
                        <p className="text-sm"><span className="font-medium">{getEventDescription(event)}</span></p>
                        <p className="text-xs text-muted-foreground mt-1">{getTimeAgo(event.created_at)}</p>
                      </div>
                      <a
                        href={`https://github.com/${event.repo.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href="https://github.com/NGIYEG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    View Full GitHub Profile
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-center">My Tech Stack</h2>
          <p className="text-muted-foreground text-center mb-8">Tools I use. Tools that use me. It's a mutual arrangement.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <Card key={tech} className="hover:shadow-lg transition-shadow hover:border-primary/30">
                <CardContent className="flex items-center justify-center p-6">
                  <span className="font-medium text-center">{tech}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Career Journey */}
        <section>
          <h2 className="text-3xl font-bold mb-2 text-center">Career Journey</h2>
          <p className="text-muted-foreground text-center mb-8">The plot thickens...</p>

          <div className="space-y-6">
            {careerJourney.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-48 flex-shrink-0">
                      <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
