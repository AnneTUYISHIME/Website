export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        <h1 className="text-2xl font-bold text-pink-600">
          Anne Portfolio
        </h1>

        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-pink-500 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-pink-500 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-pink-500 cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-pink-500 cursor-pointer">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-pink-500 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  );
}