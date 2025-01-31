import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaBootstrap } from 'react-icons/fa';
import { SiCplusplus, SiAdobephotoshop } from 'react-icons/si';  // Removed SiJava
import './Skills.css';

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, name: 'HTML5', color: '#E44D26' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: '#264DE4' },
    { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <FaSass />, name: 'Sass', color: '#CC6699' },
    { icon: <FaBootstrap />, name: 'Bootstrap', color: '#7952B3' },
    { icon: <SiCplusplus />, name: 'C++', color: '#00599C' },
    { icon: <SiAdobephotoshop />, name: 'Photoshop', color: '#31A8FF' }
  ];

  return (
    <main className="skills-page">
      <h1 className="skills-title">Technical Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            className="skill-card" 
            key={index}
            style={{ '--skill-color': skill.color }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;
