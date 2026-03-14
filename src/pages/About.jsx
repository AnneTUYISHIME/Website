export default function About() {
  return (
    <div className="bg-white rounded-2xl border border-blue-100 p-10 mb-8">
      <h2 className="text-2xl font-bold text-[#0c2a4a] mb-1">About <span className="text-[#f97316]">Me</span></h2>
      <p className="text-xs uppercase tracking-widest text-slate-400 mb-8">Who I am</p>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-24 h-24 rounded-full bg-[#0c2a4a] flex items-center justify-center text-[#f97316] text-3xl font-bold shrink-0">
          AT
        </div>
        <div className="text-[#4a6080] text-sm leading-relaxed space-y-3">
          <p>Hello! My name is <span className="text-[#0c2a4a] font-semibold">Anne Tuyishime</span>. I am a passionate software developer who enjoys building modern applications using React, Flutter, and JavaScript.</p>
          <p>I have a strong interest in Artificial Intelligence and IoT systems, and I love solving real-world problems through technology.</p>
          <p>Currently based in <span className="text-[#0c2a4a] font-semibold">Kigali, Rwanda</span>, I'm always open to exciting new opportunities.</p>
        </div>
      </div>
    </div>
  );
}