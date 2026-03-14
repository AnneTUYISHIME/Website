export default function Home() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center gap-5 py-16">
      <p className="text-xs uppercase tracking-[.18em] text-[#f97316] font-semibold">Portfolio 2026</p>
      <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#0c2a4a]">
        Hi, I'm<br /><span className="text-[#f97316]">Anne Tuyishime</span>
      </h1>
      <p className="text-[#4a6080] text-base max-w-md leading-relaxed">
        Software Developer · Flutter Developer · AI & IoT Enthusiast · Virtual Assistant
      </p>
      <div className="flex gap-4 flex-wrap mt-2">
        <button className="bg-[#f97316] hover:bg-[#ea6c0a] text-white px-8 py-3 rounded-lg font-semibold transition-all">
          Download CV
        </button>
        <button className="border-2 border-[#0c2a4a] text-[#0c2a4a] hover:bg-[#0c2a4a] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
          Hire Me
        </button>
      </div>
    </div>
  );
}