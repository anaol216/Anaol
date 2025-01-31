// Social-icons.jsx
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./SociaLIcons.css"; // Social icons styles

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href=" https://github.com/anaol216" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialIcons;
