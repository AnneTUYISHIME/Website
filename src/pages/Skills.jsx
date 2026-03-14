export default function Skills() {
  const skills = [
    { name: "HTML", emoji: "🌐" }, { name: "CSS", emoji: "🎨" },
    { name: "JavaScript", emoji: "⚡" }, { name: "React", emoji: "⚛️" },
    { name: "Flutter", emoji: "📱" }, { name: "Node.js", emoji: "🟢" },
    { name: "AI & IoT", emoji: "🤖" }, { name: "Git & GitHub", emoji: "🐙" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-blue-100 p-10 mb-8">
      <h2 className="text-2xl font-bold text-[#0c2a4a] mb-1">My <span className="text-[#f97316]">Skills</span></h2>
      <p className="text-xs uppercase tracking-widest text-slate-400 mb-8">Technologies I work with</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((s, i) => (
          <div key={i} className="bg-[#f0f6ff] rounded-xl p-5 text-center border border-blue-100 hover:border-[#f97316] hover:-translate-y-1 transition-all duration-200 group">
            <div className="text-2xl mb-2">{s.emoji}</div>
            <p className="text-sm font-semibold text-[#0c2a4a] group-hover:text-[#f97316] transition-colors">{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}