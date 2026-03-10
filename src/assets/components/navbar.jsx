import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur shadow-md flex justify-between items-center px-8 py-4 z-50">
      <h1 className="font-bold text-pink-600 text-xl">Anne Tuyishime</h1>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}