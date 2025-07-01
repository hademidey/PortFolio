import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

export default function SideNav() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center justify-center w-[100px] h-[300px]">
      <BsGithub />
      <FaTwitter />
      <FaInstagram />
      <FaLinkedin />
      <MdOutlineMailOutline />
      <MdOutlinePhone />
    </div>
  );
}
