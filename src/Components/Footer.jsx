import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-600/50 text-white py-6 mt-10">
      <div className=" text-center space-y-1">
        <h2 className="text-2xl font-bold">Let's Connect</h2>
        <p className="text-gray-700">Feel free to reach out on any of these platforms 👇</p>

        <div className="flex justify-center space-x-6 text-xl mt-5 text-gray-500">
          <a href="https://github.com/hademidey?" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/samuel-alase-271420189/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaTwitter />
          </a>
          <a href="alaseademide02@gmail.com" className="hover:text-gray-300 transition">
            <FaEnvelope />
          </a>
        </div>

        <hr className="border-gray-700  mb-6 mt-2 w-1/2 mx-auto" />

        <p className="text-sm text-white">
          © {new Date().getFullYear()} Alase Samuel. 
        </p>
      </div>
    </footer>
  );
};
  


 

