import React, { useRef } from 'react';
import './Introduction.scss';
import Intro from './Intro';

const Introduction = ({ introTitle, introText, skills }) => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    // Get mouse position relative to the container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Calculate an offset between -1 and 1
    const offsetX = (x - rect.width / 2) / (rect.width / 2);
    const offsetY = (y - rect.height / 2) / (rect.height / 2);
    // Set maximum rotation (in degrees)
    const maxRotation = 5;
    const rotateY = offsetX * maxRotation;
    const rotateX = -offsetY * maxRotation;
    container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    // Reset transform when the mouse leaves
    containerRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      className="intro-skills-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="introduction">
        <Intro></Intro>
        <h2>{introTitle}</h2>
        <p>{introText}</p>
      </div>
      <h2>skills</h2>
      <div className="skills">


        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.icon} alt={skill.name} />
            {/* <span>{skill.name}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
