export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Flutter",
    "Node.js",
    "AI & IoT",
    "Git & GitHub"
  ];

  return (
    <section className="min-h-screen p-10 text-center">
      <h2 className="text-3xl font-bold text-pink-600 mb-8">My Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}