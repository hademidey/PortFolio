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
        <div className="flex justify-center items-center  font-bold text-2xl">
          Alase Samuel
        </div>
        <button
          className="space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-0.5 bg-gray-800"></div>
          <div className="w-5 h-0.5 bg-gray-800"></div>
          {/* <div className="w-4 h-0.5 bg-gray-800"></div> */}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 right-0 border bg-gray-400/45 shadow-md rounded-md p-3 z-15 w-full text-left">
          <ul className="space-y-2 text-sm flex flex-col justify-between gap-1">
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Experience</li>
            <li className="hover:text-blue-500 cursor-pointer">Projects</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
