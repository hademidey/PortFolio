import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mt-6 mb-20 md:text-4xl ">
        Contact
      </h2>

      <div className="grid justify-center space-y-5 text-xl mt-5 text-gray-500 w-[90%] mx-auto p-5 bg-gray-200/70 rounded-lg shadow-lg md:w-[30%]">
        <a
          href="https://github.com/hademidey?"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition flex items-center gap-5 slide-in-one"
        >
          <FaGithub />
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-alase-271420189/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition flex items-center gap-5 slide-in-three"
        >
          <FaLinkedin />
          LinkedIn
        </a>
        <a
          href="https://x.com/miide_ade?t=eb7X_Ho6FkhKILKjxr3hzA&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition flex items-center gap-5 slide-in-one"
        >
          <FaTwitter />
          Twitter
        </a>
        <a
          href="mailto:alaseademide02@gmail.com"
          className="hover:text-gray-300 transition flex items-center gap-5 slide-in-three"
        >
          <FaEnvelope />
          Email
        </a>
        <a
          href="https://wa.me/2348068199519"
          className="hover:text-gray-300 transition flex items-center gap-5 slide-in-one"
        >
          <FaWhatsapp />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
