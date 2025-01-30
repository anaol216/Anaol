import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ toggleMenu, menuOpen, darkTheme, setDarkTheme }) => {
  return (
    <header>
      <Link to="/" className="logo">MY LOGO</Link>
      <nav>
        <div className="burger" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li> {/* Adjusted for React Router */}
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li> {/* Fixed to /contact */}
        </ul>
      </nav>
      <div className="theme-toggle">
        <button id="theme-switcher" onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? "☀️" : "🌓"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
