import { useEffect, useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const t = {
    bg: dark ? "#0f172a" : "#f0f6ff",
    card: dark ? "#1e293b" : "white",
    cardBorder: dark ? "#334155" : "#dbeafe",
    innerCard: dark ? "#0f172a" : "#f0f6ff",
    innerBorder: dark ? "#334155" : "#bfdbfe",
    text: dark ? "#f1f5f9" : "#0c2a4a",
    muted: dark ? "#94a3b8" : "#4a6080",
    label: dark ? "#64748b" : "#94a3b8",
    nav: dark ? "#0f172a" : "#1f2937",
    navBorder: dark ? "#1e293b" : "#374151",
    footer: dark ? "#1e293b" : "white",
    footerBorder: dark ? "#334155" : "#dbeafe",
  };

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

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: t.bg, minHeight: "100vh", color: t.text, transition: "all .3s" }}>

      <nav style={{ background: t.nav, padding: "1rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 99, borderBottom: "1px solid " + t.navBorder, transition: "all .3s" }}>
        <span style={{ color: "#f97316", fontWeight: 700, fontSize: "1.1rem", letterSpacing: ".05em" }}>
          Anne <span style={{ color: "white" }}>TUYISHIME</span>
        </span>
        <ul style={{ display: "flex", gap: ".5rem", listStyle: "none", margin: 0, padding: 0 }}>
          <li>
            <a href="#home" style={{ color: "white", textDecoration: "none", fontSize: ".875rem", fontWeight: 600, padding: ".5rem 1.2rem", borderRadius: "50px", transition: "all .2s", display: "inline-block" }}
              onMouseEnter={(e) => { e.target.style.background = "#f97316"; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; }}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" style={{ color: "white", textDecoration: "none", fontSize: ".875rem", fontWeight: 600, padding: ".5rem 1.2rem", borderRadius: "50px", transition: "all .2s", display: "inline-block" }}
              onMouseEnter={(e) => { e.target.style.background = "#f97316"; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; }}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" style={{ color: "white", textDecoration: "none", fontSize: ".875rem", fontWeight: 600, padding: ".5rem 1.2rem", borderRadius: "50px", transition: "all .2s", display: "inline-block" }}
              onMouseEnter={(e) => { e.target.style.background = "#f97316"; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" style={{ color: "white", textDecoration: "none", fontSize: ".875rem", fontWeight: 600, padding: ".5rem 1.2rem", borderRadius: "50px", transition: "all .2s", display: "inline-block" }}
              onMouseEnter={(e) => { e.target.style.background = "#f97316"; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; }}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" style={{ color: "white", textDecoration: "none", fontSize: ".875rem", fontWeight: 600, padding: ".5rem 1.2rem", borderRadius: "50px", transition: "all .2s", display: "inline-block" }}
              onMouseEnter={(e) => { e.target.style.background = "#f97316"; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; }}>
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => setDark(!dark)}
          style={{ background: dark ? "#f97316" : "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50px", padding: ".45rem 1rem", cursor: "pointer", fontFamily: "inherit", fontSize: ".85rem", fontWeight: 600, display: "flex", alignItems: "center", gap: ".4rem", transition: "all .2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#f97316"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = dark ? "#f97316" : "rgba(255,255,255,0.1)"; }}
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem 4rem" }}>

        <section id="home" style={{ minHeight: "85vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
              <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700, lineHeight: 1.1, color: t.text }}>
                Hi, I am
                <br />
                <span style={{ color: "#f97316" }}>Anne Tuyishime</span>
              </h1>
              <p style={{ color: t.muted, fontSize: "1rem", maxWidth: "460px", lineHeight: 1.8 }}>
                Software Developer · Flutter Developer · AI and IoT Enthusiast · Virtual Assistant based in Kigali, Rwanda.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button
                  style={{ background: "#f97316", color: "white", border: "none", padding: ".75rem 2rem", borderRadius: "8px", fontFamily: "inherit", fontSize: ".9rem", fontWeight: 600, cursor: "pointer" }}
                  onMouseEnter={(e) => { e.target.style.background = "#ea6c0a"; }}
                  onMouseLeave={(e) => { e.target.style.background = "#f97316"; }}
                >
                  Download CV
                </button>
              </div>
            </div>

            <div style={{ flexShrink: 0 }}>
              <img
                src="/profile.jpg"
                alt="Anne Tuyishime"
                style={{ width: "180px", height: "180px", borderRadius: "50%", objectFit: "cover", border: "4px solid #f97316" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  document.getElementById("home-avatar-fallback").style.display = "flex";
                }}
              />
              <div
                id="home-avatar-fallback"
                style={{ width: "180px", height: "180px", borderRadius: "50%", background: "#0c2a4a", display: "none", alignItems: "center", justifyContent: "center", fontSize: "2.5rem", fontWeight: 700, color: "#f97316", border: "4px solid #f97316" }}
              >
                AT
              </div>
            </div>

          </div>
        </section>

        <section id="about" style={{ background: t.card, borderRadius: "16px", border: "1px solid " + t.cardBorder, padding: "2.5rem", marginBottom: "2rem", transition: "all .3s" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: t.text, marginBottom: ".25rem" }}>
            About <span style={{ color: "#f97316" }}>Me</span>
          </h2>
          <p style={{ fontSize: ".72rem", textTransform: "uppercase", letterSpacing: ".12em", color: t.label, marginBottom: "2rem" }}>
            Who I am
          </p>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ color: t.muted, fontSize: ".92rem", lineHeight: 1.85, flex: 1 }}>
              <p>
                I am <strong style={{ color: t.text }}>Anne Tuyishime</strong>, a passionate and motivated software development student with a strong interest in building modern, user-friendly web and mobile applications that solve real-world problems.
              </p>
              <p style={{ marginTop: ".75rem" }}>
                I have experience working with technologies such as HTML, CSS, and JavaScript, and I am currently expanding my skills in React, Flutter, and backend development. I enjoy creating responsive and visually appealing interfaces, as well as designing structured and efficient databases.
              </p>
              <p style={{ marginTop: ".75rem" }}>
                One of my key interests is integrating technology with real-life solutions. I am currently working on projects such as an AI-based maize yield prediction system and a Baby Care mobile application, where I apply both technical and creative problem-solving skills.
              </p>
              <p style={{ marginTop: ".75rem" }}>
                I am a fast learner, detail-oriented, and enjoy working both independently and as part of a team. I am always eager to learn new technologies, improve my skills, and take on new challenges that help me grow as a developer.
              </p>
              <p style={{ marginTop: ".75rem" }}>
                My goal is to become a skilled full-stack developer and contribute to innovative solutions that make a positive impact in my community and beyond.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <img
                src="/profile.jpg"
                alt="Anne Tuyishime"
                style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", border: "4px solid #f97316" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  document.getElementById("about-avatar-fallback").style.display = "flex";
                }}
              />
              <div
                id="about-avatar-fallback"
                style={{ width: "150px", height: "150px", borderRadius: "50%", background: "#0c2a4a", display: "none", alignItems: "center", justifyContent: "center", fontSize: "2rem", fontWeight: 700, color: "#f97316", border: "4px solid #f97316" }}
              >
                AT
              </div>
            </div>
          </div>
        </section>

        <section id="projects" style={{ background: t.card, borderRadius: "16px", border: "1px solid " + t.cardBorder, padding: "2.5rem", marginBottom: "2rem", transition: "all .3s" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: t.text, marginBottom: ".25rem" }}>
            My <span style={{ color: "#f97316" }}>Projects</span>
          </h2>
          <p style={{ fontSize: ".72rem", textTransform: "uppercase", letterSpacing: ".12em", color: t.label, marginBottom: "2rem" }}>
            Things I have built
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {projects.map((p, i) => (
              <div
                key={i}
                style={{ background: t.innerCard, borderRadius: "12px", padding: "1.5rem", border: "1px solid " + t.innerBorder, transition: "transform .2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: ".75rem" }}>{p.emoji}</div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: t.text, marginBottom: ".4rem" }}>{p.title}</h3>
                <p style={{ fontSize: ".85rem", color: t.muted, lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" style={{ background: t.card, borderRadius: "16px", border: "1px solid " + t.cardBorder, padding: "2.5rem", marginBottom: "2rem", transition: "all .3s" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: t.text, marginBottom: ".25rem" }}>
            My <span style={{ color: "#f97316" }}>Skills</span>
          </h2>
          <p style={{ fontSize: ".72rem", textTransform: "uppercase", letterSpacing: ".12em", color: t.label, marginBottom: "2rem" }}>
            Technologies I work with
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: ".75rem" }}>
            {skills.map((s, i) => (
              <div
                key={i}
                style={{ background: t.innerCard, border: "1px solid " + t.innerBorder, borderRadius: "10px", padding: "1rem", textAlign: "center", cursor: "default", transition: "transform .2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#f97316"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.innerBorder; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: ".4rem" }}>{s.emoji}</div>
                <p style={{ fontSize: ".85rem", fontWeight: 600, color: t.text }}>{s.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={{ background: t.card, borderRadius: "16px", border: "1px solid " + t.cardBorder, padding: "2.5rem", marginBottom: "2rem", transition: "all .3s" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: t.text, marginBottom: ".25rem" }}>
            Contact <span style={{ color: "#f97316" }}>Me</span>
          </h2>
          <p style={{ fontSize: ".72rem", textTransform: "uppercase", letterSpacing: ".12em", color: t.label, marginBottom: "2rem" }}>
            Lets work together
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "460px" }}>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", background: t.innerCard, borderRadius: "10px", padding: "1rem 1.25rem", border: "1px solid " + t.innerBorder }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0c2a4a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>📧</div>
              <div>
                <p style={{ fontSize: ".68rem", textTransform: "uppercase", letterSpacing: ".1em", color: t.label, marginBottom: ".15rem" }}>Email</p>
                <p style={{ fontSize: ".9rem", fontWeight: 600, color: t.text }}>atuyishime28@gmail.com</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", background: t.innerCard, borderRadius: "10px", padding: "1rem 1.25rem", border: "1px solid " + t.innerBorder }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0c2a4a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>📱</div>
              <div>
                <p style={{ fontSize: ".68rem", textTransform: "uppercase", letterSpacing: ".1em", color: t.label, marginBottom: ".15rem" }}>Phone</p>
                <p style={{ fontSize: ".9rem", fontWeight: 600, color: t.text }}>0786544729</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", background: t.innerCard, borderRadius: "10px", padding: "1rem 1.25rem", border: "1px solid " + t.innerBorder }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0c2a4a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>📍</div>
              <div>
                <p style={{ fontSize: ".68rem", textTransform: "uppercase", letterSpacing: ".1em", color: t.label, marginBottom: ".15rem" }}>Location</p>
                <p style={{ fontSize: ".9rem", fontWeight: 600, color: t.text }}>Kigali, Rwanda</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", background: t.innerCard, borderRadius: "10px", padding: "1rem 1.25rem", border: "1px solid " + t.innerBorder }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0c2a4a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>💼</div>
              <div>
                <p style={{ fontSize: ".68rem", textTransform: "uppercase", letterSpacing: ".1em", color: t.label, marginBottom: ".15rem" }}>LinkedIn</p>
                <a href="https://linkedin.com/in/anne-tuyishime" target="_blank" rel="noreferrer" style={{ fontSize: ".9rem", fontWeight: 600, color: t.text, textDecoration: "none" }}>
                  anne-tuyishime
                </a>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", background: t.innerCard, borderRadius: "10px", padding: "1rem 1.25rem", border: "1px solid " + t.innerBorder }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0c2a4a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>🐙</div>
              <div>
                <p style={{ fontSize: ".68rem", textTransform: "uppercase", letterSpacing: ".1em", color: t.label, marginBottom: ".15rem" }}>GitHub</p>
                <a href="https://github.com/AnneTUYISHIME" target="_blank" rel="noreferrer" style={{ fontSize: ".9rem", fontWeight: 600, color: t.text, textDecoration: "none" }}>
                  AnneTUYISHIME
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>

      <footer style={{ textAlign: "center", padding: "1.5rem", fontSize: ".8rem", color: t.label, borderTop: "1px solid " + t.footerBorder, background: t.footer, transition: "all .3s" }}>
        2026 <span style={{ color: "#f97316", fontWeight: 600 }}>Anne Tuyishime</span>. All rights reserved.
      </footer>

    </div>
  );
}