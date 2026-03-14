export default function Contact() {
  return (
    <div className="bg-white rounded-2xl border border-blue-100 p-10 mb-8">
      <h2 className="text-2xl font-bold text-[#0c2a4a] mb-1">Contact <span className="text-[#f97316]">Me</span></h2>
      <p className="text-xs uppercase tracking-widest text-slate-400 mb-8">Let's work together</p>
      <div className="flex flex-col gap-4 max-w-md">
        {[
          { icon: "📧", label: "Email", value: "atuyishime28@gmail.com" },
          { icon: "📱", label: "Phone", value: "0786544729" },
          { icon: "📍", label: "Location", value: "Kigali, Rwanda" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-[#f0f6ff] rounded-xl p-4 border border-blue-100">
            <div className="w-10 h-10 rounded-full bg-[#0c2a4a] flex items-center justify-center text-base shrink-0">{item.icon}</div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-0.5">{item.label}</p>
              <p className="text-sm font-semibold text-[#0c2a4a]">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}