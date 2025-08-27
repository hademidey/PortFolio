import { File } from "lucide-react";
import React from "react";

export default function CVSection() {
  return (
    <div className="text-center ">
      <a
        href="img/Alase samue.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-black px-4  rounded-lg  transition"
      >
       <File/> <span> View CV</span>
      </a>
    </div>
  );
}
