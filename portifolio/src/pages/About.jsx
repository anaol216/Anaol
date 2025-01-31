import "./About.css";
import codingImage from "../images/coding.jpg";
import designingImage from "../images/Photoshop.jpg";
import tradingImage from "../images/Trade.jpg";
import continiouslearn from "../images/Learn.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="about-intro">
        <img 
          src={codingImage} 
          alt="Profile" 
          className="profile-image"
        />
        <div className="intro-text">
          <h1>About Me</h1>
          <p className="bio">
            I'm a passionate developer, who always wants to learning something and build somethingthat will
            that can solve a problem, I love to create meaningful solutions that make people's lives easier. 
            When I'm not coding, you can find me designing interfaces or analyzing market trends.
          </p>
          <div className="skills">
            <h3>Tech Stack</h3>
            <ul>
              <li>Java & C#</li>
              <li>React & JavaScript</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="passions-section">
        <h2>My Passions & Hobbies</h2>
        <div className="passions-grid">
          <div className="passion-card">
            <img src={codingImage} alt="Coding" />
            <h3>Software Development</h3>
            <p>Building web applications and solving complex programming challenges</p>
          </div>

          <div className="passion-card">
            <img src={designingImage} alt="Designing" />
            <h3>Photoshop</h3>
            <p>Creating beautiful and attractive posters for companies</p>
          </div>

          <div className="passion-card">
            <img src={tradingImage} alt="Trading" />
            <h3>Financial Markets</h3>
            <p>Analyzing market trends and exploring investment strategies</p>
          </div>

          <div className="passion-card">
            <img src={continiouslearn} alt="Learning" />
            <h3>Continuous Learning</h3>
            <p>Regularly updating my skills with latest technologies and frameworks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;