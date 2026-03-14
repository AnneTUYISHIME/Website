import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const projects = [
    { emoji: "👶", title: "Baby Care App", desc: "A Flutter app helping parents track baby feeding, health and growth milestones." },
    { emoji: "🌽", title: "Maize Yield Prediction", desc: "AI and IoT system predicting maize yield from soil and weather sensor data." },
    { emoji: "💰", title: "Saving Cooperative", desc: "Web system for managing weekly community savings digitally and transparently." },
    { emoji: "🪑", title: "Sitting Arrangement", desc: "A system that manages and organizes seating arrangements for events and classrooms." },
    { emoji: "🚗", title: "Car Finder", desc: "A web application that helps users search, filter and find their ideal car easily." },
  ];

  const skills = [
    { name: "HTML", emoji: "🌐" },
    { name: "CSS", emoji: "🎨" },
    { name: "JavaScript", emoji: "⚡" },
    { name: "React", emoji: "⚛️" },
    { name: "Flutter", emoji: "📱" },
    { name: "Node.js", emoji: "🟢" },
    { name: "AI and IoT", emoji: "🤖" },
    { name: "Git and GitHub", emoji: "🐙" },
    { name: "Java", emoji: "☕" },
    { name: "C++", emoji: "⚙️" },
    { name: "C", emoji: "🔵" },
  ];

  const contacts = [
    { icon: "📧", label: "Email", value: "atuyishime28@gmail.com" },
    { icon: "📱", label: "Phone", value: "0786544729" },
    { icon: "📍", label: "Location", value: "Kigali, Rwanda" },
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#f0f6ff", minHeight: "100vh", color: "#0c2a4a" }}>

      <nav style={{ background: "#0c2a4a", padding: "1rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 99 }}>
        <span style={{ color: "#f97316", fontWeight: 700, fontSize: "1.2rem" }}>Anne T.</span>
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
          <li>
            <a href="#home" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: ".875rem", fontWeight: 500 }}
              onMouseEnter={(e) => { e.target.style.color = "#f97316"; }}
              onMouseLeave={(e) => { e.target.style.color = "#cbd5e1"; }}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: ".875rem", fontWeight: 500 }}
              onMouseEnter={(e) => { e.target.style.color = "#f97316"; }}
              onMouseLeave={(e) => { e.target.style.color = "#cbd5e1"; }}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: ".875rem", fontWeight: 500 }}
              onMouseEnter={(e) => { e.target.style.color = "#f97316"; }}
              onMouseLeave={(e) => { e.target.style.color = "#cbd5e1"; }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: ".875rem", fontWeight: 500 }}
              onMouseEnter={(e) => { e.target.style.color = "#f97316"; }}
              onMouseLeave={(e) => { e.target.style.color = "#cbd5e1"; }}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: ".875rem", fontWeight: 500 }}
              onMouseEnter={(e) => { e.target.style.color = "#f97316"; }}
              onMouseLeave={(e) => { e.target.style.color = "#cbd5e1"; }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem 4rem" }}>

        <section id="home" style={{ minHeight: "85vh", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.2rem", paddingTop: "2rem" }}>
          <p style={{ fontSize: ".75rem", letterSpacing: ".18em", textTransform: "uppercase", color: "#f97316", fontWeight: 600 }}>
            Portfolio 2026
          </p>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700, lineHeight: 1.1, color: "#0c2a4a" }}>
            Hi, I am
            <br />
            <span style={{ color: "#f97316" }}>Anne Tuyishime</span>
          </h1>
          <p style={{ color: "#4a6080", fontSize: "1rem", maxWidth: "460px", lineHeight: 1.8 }}>
            Software Developer · Flutter Developer · AI and IoT Enthusiast · Virtual Assistant based in Kigali, Rwanda.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: ".5rem" }}>
            <button
              style={{ background: "#f97316", color: "white", border: "none", padding: ".75rem 2rem", borderRadius: "8px", fontFamily: "inherit", fontSize: ".9rem", fontWeight: 600, cursor: "pointer" }}
              onMouseEnter={(e) => { e.target.style.background = "#ea6c0a"; }}
              onMouseLeave={(e) => { e.target.style.background = "#f97316"; }}
            >
              Download CV
            </button>
            <button
              style={{ background: "transparent", color: "#0c2a4a", border: "2px solid #0c2a4a", padding: ".75rem 2rem", borderRadius: "8px", fontFamily: "inherit", fontSize: ".9rem", fontWeight: 600, cursor: "pointer" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#0c2a4a"; e.currentTarget.style.color = "white"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0c2a4a"; }}
            >
              Hire Me
            </button>
          </div>
        </section>

        <section id="about" style={{ background: "white", borderRadius: "16px", border: "1px solid #dbeafe", padding: "2.5rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0c2a4a", marginBottom: ".25rem" }}>
            About <span style={{ color: "#f97316" }}>Me</span>
          </h2>
          <p style={{ fontSize: ".72rem", textTransform: "uppercase", letterSpacing: ".12em", color: "#94a3b8", marginBottom: "2rem" }}>
            Who I am
          </p>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flexShrink: 0 }}>
              <img
                src="/profile.jpg"
                alt="Anne Tuyishime"
                style={{ width: "110px", height: "110px", borderRadius: "50%", objectFit: "cover", border: "3px solid #f97316" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  document.getElementById("avatar-fallback").style.display = "flex";
                }}
              />
              <div
                id="avatar-fallback"
                style={{ width: "110px", height: "110px", borderRadius: "50%", background: "#0c2a4a", display: "none", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", fontWeight: 700, color: "#f97316", border: "3px solid #f97316" }}
              >
                AT
              </div>
            </div>
            <div style={{ color: "#4a6080", fontSize: ".92rem", lineHeight: 1.85, flex: 1 }}>
              <p>
                Hello! My name is <strong style={{ color: "#0c2a4a" }}>Anne Tuyishime</strong>. I am a passionate software developer who enjoys building modern applications using React, Flutter, and JavaScript.
              </p>
              <p style={{ marginTop: ".75rem" }}>
                I have a strong interest in AI and IoT systems. Currently based in <strong style={{ color: "#0c2a4a" }}>Kigali, Rwanda</strong>, always open to new opportunities.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" style={{ background: "white", borderRadius: "16px", border: "1px solid #dbeafe", padding: "2.5rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0c2a4a", marginBottom: ".25rem" }}>
            My <span style={{ color: "#f97316" }}>Projects</span>
          </h2>
          <p style={{ fontSize: ".72rem", textTransform: "uppercase", letterSpacing: ".12em", color: "#94a3b8", marginBottom: "2rem" }}>
            Things I have built
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {projects.map((p, i) => (
              <div
                key={i}
                style={{ background: "#f0f6ff", borderRadius: "12px", padding: "1.5rem", border: "1px solid #bfdbfe", transition: "transform .2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(12,42,74,0.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: ".75rem" }}>{p.emoji}</div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#0c2a4a", marginBottom: ".4rem" }}>{p.title}</h3>
                <p style={{ fontSize: ".85rem", color: "#4a6080", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" style={{ background: "white", borderRadius: "16px", border: "1px solid #dbeafe", padding: "2.5rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0c2a4a", marginBottom: ".25rem" }}>
            My <span style={{ color: "#f97316" }}>Skills</span>
          </h2>
          <p style={{ fontSize: ".72rem", textTransform: "uppercase", letterSpacing: ".12em", color: "#94a3b8", marginBottom: "2rem" }}>
            Technologies I work with
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: ".75rem" }}>
            {skills.map((s, i) => (
              <div
                key={i}
                style={{ background: "#f0f6ff", border: "1px solid #bfdbfe", borderRadius: "10px", padding: "1rem", textAlign: "center", cursor: "default", transition: "transform .2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#f97316"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#bfdbfe"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: ".4rem" }}>{s.emoji}</div>
                <p style={{ fontSize: ".85rem", fontWeight: 600, color: "#0c2a4a" }}>{s.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={{ background: "white", borderRadius: "16px", border: "1px solid #dbeafe", padding: "2.5rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0c2a4a", marginBottom: ".25rem" }}>
            Contact <span style={{ color: "#f97316" }}>Me</span>
          </h2>
          <p style={{ fontSize: ".72rem", textTransform: "uppercase", letterSpacing: ".12em", color: "#94a3b8", marginBottom: "2rem" }}>
            Lets work together
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "460px" }}>
            {contacts.map((c, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: "1rem", background: "#f0f6ff", borderRadius: "10px", padding: "1rem 1.25rem", border: "1px solid #bfdbfe" }}
              >
                <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0c2a4a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <p style={{ fontSize: ".68rem", textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: ".15rem" }}>{c.label}</p>
                  <p style={{ fontSize: ".9rem", fontWeight: 600, color: "#0c2a4a" }}>{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <footer style={{ textAlign: "center", padding: "1.5rem", fontSize: ".8rem", color: "#94a3b8", borderTop: "1px solid #dbeafe", background: "white" }}>
        2026 <span style={{ color: "#f97316", fontWeight: 600 }}>Anne Tuyishime</span>. All rights reserved.
      </footer>

    </div>
  );
}