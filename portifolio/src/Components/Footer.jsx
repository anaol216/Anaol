// Footer.jsx
import "./Footer.css"; // Footer styles

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Anaol. All Rights Reserved. | <a href="#">Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
