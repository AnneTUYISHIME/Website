export default function Projects() {
  const projects = [
    {
      title: "Baby Care App",
      desc: "A Flutter application that helps parents track baby feeding, health and growth."
    },
    {
      title: "Maize Yield Prediction",
      desc: "AI + IoT system that predicts maize yield based on soil and weather data."
    },
    {
      title: "Saving Cooperative System",
      desc: "A web system that helps groups manage weekly savings digitally."
    }
  ];

  return (
    <section className="min-h-screen p-10 text-center">
      <h2 className="text-3xl font-bold text-pink-600 mb-8">My Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}