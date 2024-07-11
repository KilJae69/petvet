import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function SocialLinks({ withBackground = false }) {
  return (
    <ul className="flex gap-5 text-white">
      <li
        className={`group ${
          withBackground
            ? " bg-primaryAccent cursor-pointer rounded-full p-4"
            : ""
        }`}
      >
        <span className="sr-only">Link to facebook</span>
        <a
          href="https://www.facebook.com"
          target="__blank"
          aria-label="Facebook"
        >
          <FaFacebookF className="size-4 transition-colors group-hover:text-blue-600" />
        </a>
      </li>
      <li
        className={`group ${
          withBackground
            ? " bg-primaryAccent cursor-pointer rounded-full p-4"
            : ""
        }`}
      >
        <span className="sr-only">Link to X</span>
        <a href="https://www.x.com" target="__blank" aria-label="Twitter/X">
          <FaTwitter className="size-4 transition-colors group-hover:text-blue-400" />
        </a>
      </li>
      <li
        className={`group ${
          withBackground
            ? " bg-primaryAccent cursor-pointer rounded-full p-4"
            : ""
        }`}
      >
        <span className="sr-only">Link to LinkedIn</span>
        <a
          href="https://www.linkedin.com"
          target="__blank"
          aria-label="Linkedin"
        >
          <FaLinkedinIn className="size-4 transition-colors group-hover:text-rose-400" />
        </a>
      </li>
      <li
        className={`group ${
          withBackground
            ? " bg-primaryAccent cursor-pointer rounded-full p-4"
            : ""
        }`}
      >
        <span className="sr-only">Link to Instagram</span>
        <a
          href="https://www.instagram.com"
          target="__blank"
          aria-label="Instagram"
        >
          <FaInstagram className="size-4 transition-colors group-hover:text-violet-400" />
        </a>
      </li>
    </ul>
  );
}
