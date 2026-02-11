import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-pink-200 text-pink-800 px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold">AnneTUYISHIME</div>
      <ul className="flex gap-6">
        <li><a href="#home" className="hover:text-pink-600">Home</a></li>
        <li><a href="#about" className="hover:text-pink-600">About</a></li>
        <li><a href="#projects" className="hover:text-pink-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
      </ul>
    </nav>
  );
}
