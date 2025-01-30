import { useEffect, useState } from "react";
import "./Home.css";

const roles = [
  "Frontend Developer",
  "Graphics Designer",
  "Web Developer",
  "Enthusiast Data Analyst",
];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const nextText = roles[index];

    const timer = setTimeout(() => {
      setText(nextText.substring(0, charIndex));

      if (!isDeleting && charIndex === nextText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }

      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <section className="home">
      <img src="/vite.svg" alt="Your Name" className="profile-image" />
      <div className="home-content">
        <h1>Hello, I'm Anaol</h1>
        <h2>
          Hi, I'm <span className="input">{text}</span>
          <span className="cursor">|</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </section>
  );
};

export default Home;
