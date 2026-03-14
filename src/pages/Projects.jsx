export default function Projects() {
  const projects = [
    { emoji: "👶", title: "Baby Care App", desc: "A Flutter app helping parents track baby feeding, health and growth milestones." },
    { emoji: "🌽", title: "Maize Yield Prediction", desc: "AI + IoT system predicting maize yield from soil and weather sensor data." },
    { emoji: "💰", title: "Saving Cooperative", desc: "Web system for managing weekly community savings digitally and transparently." },
  ];

  return (
    <div className="bg-white rounded-2xl border border-blue-100 p-10 mb-8">
      <h2 className="text-2xl font-bold text-[#0c2a4a] mb-1">My <span className="text-[#f97316]">Projects</span></h2>
      <p className="text-xs uppercase tracking-widest text-slate-400 mb-8">Things I've built</p>
      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <div key={i} className="bg-[#f0f6ff] rounded-xl p-6 border border-blue-100 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
            <div className="text-3xl mb-3">{p.emoji}</div>
            <h3 className="font-bold text-[#0c2a4a] mb-2">{p.title}</h3>
            <p className="text-[#4a6080] text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}