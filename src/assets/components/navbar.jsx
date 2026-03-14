export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        <h1 className="text-2xl font-bold text-pink-600">
          Anne Portfolio
        </h1>

        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-pink-500 cursor-pointer">Home</li>
          <li className="hover:text-pink-500 cursor-pointer">About</li>
          <li className="hover:text-pink-500 cursor-pointer">Projects</li>
          <li className="hover:text-pink-500 cursor-pointer">Skills</li>
          <li className="hover:text-pink-500 cursor-pointer">Contact</li>
        </ul>

      </div>
    </nav>
  );
}