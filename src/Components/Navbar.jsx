import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-10 mt-5 py-4 ">
      <span className="text-2xl text-blue-600">MIIDE</span>
      <div>
        <ul className="flex justify-center gap-10 text-blue-600 ">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </nav>
  );
}
