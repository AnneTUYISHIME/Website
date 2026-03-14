export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0c2a4a] px-8 py-4 flex justify-between items-center">
      <h1 className="text-[#f97316] font-bold text-xl tracking-wide">Anne T.</h1>
      <ul className="flex gap-8 list-none text-sm font-medium text-slate-300">
        <li><a href="#home" className="hover:text-[#f97316] transition-colors">Home</a></li>
        <li><a href="#about" className="hover:text-[#f97316] transition-colors">About</a></li>
        <li><a href="#projects" className="hover:text-[#f97316] transition-colors">Projects</a></li>
        <li><a href="#skills" className="hover:text-[#f97316] transition-colors">Skills</a></li>
        <li><a href="#contact" className="hover:text-[#f97316] transition-colors">Contact</a></li>
      </ul>
    </nav>
  );
}