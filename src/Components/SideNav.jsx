import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

export default function SideNav() {
  return (
    <div className="flex flex-col gap-10 mt-60 items-center text-blue-700 justify-center w-[150px] h-full">
      <BsGithub />
      <FaTwitter />
      <FaInstagram />
      <FaLinkedin />
      
      <MdOutlinePhone />
    </div>
  );
}
