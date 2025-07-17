import { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";

export default function Navbar() {
  // const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <nav className=" bg-gray-100 p-4">
      <div className="flex justify-between items-center gap-20 px-2">
        <div className="font-bold text-2xl">Alase Samuel</div>
        <button
          className="space-y-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-0.5 bg-gray-800"></div>
          <div className="w-5 h-0.5 bg-gray-800"></div>
          {/* <div className="w-4 h-0.5 bg-gray-800"></div> */}
        </button>
        <div
          className={`absolute right-0 border bg-gray-400/45 shadow-md rounded-md p-3 -z-15 w-full text-left ${
            menuOpen ? "top-16" : "-top-100"
          } transition-all duration-700 md:relative md:z-15 md:top-0 md:bg-inherit md:border-none md:shadow-none md:w-auto`}
        >
          <ul className="space-y-2 text-sm flex flex-col gap-1 md:gap-5 md:flex-row">
            <li className="hover:text-blue-500 cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li
              className="hover:text-blue-500 cursor-pointer"
              href="#experience"
            >
              Experience
            </li>
            <li className="hover:text-blue-500 cursor-pointer" href="projects">
              Projects
            </li>
            <li className="hover:text-blue-500 cursor-pointer" href="contact">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
