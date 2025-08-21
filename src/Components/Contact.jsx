import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";


export default function Contact() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-6 underline">
        {" "}
        Contact
      </h2>

      <div className="flex justify-center space-x-6 text-xl mt-5 text-gray-500">
        <a
          href="https://github.com/hademidey?"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-alase-271420189/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/miide_ade?t=eb7X_Ho6FkhKILKjxr3hzA&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:alaseademide02@gmail.com"
          className="hover:text-gray-300 transition"
        >
          <FaEnvelope />
        </a>
         <a
          href="https://wa.me/2348068199519"
          className="hover:text-gray-300 transition"
        >
          <FaWhatsapp />
        </a>

        
      </div>
    </div>
  );
}
