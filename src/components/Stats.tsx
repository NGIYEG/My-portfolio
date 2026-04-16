const Stats = () => {
  const stats = [
    { value: "5+", label: "Projects Completed", emoji: "🚀" },
    { value: "15+", label: "Technologies Tamed", emoji: "🛠️" },
    { value: "∞", label: "Cups of Coffee", emoji: "☕" },
    { value: "5+", label: "Happy Clients", emoji: "😄" },
  ];

  return (
    <section className="py-16 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-serif">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
