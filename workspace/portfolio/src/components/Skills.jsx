import React from 'react';
import './Skills.scss';

const Skills = ({ skills }) => {
  return (
    <div>
        <h3>Skills</h3>     

        <div className="skills">
        {skills.map((skill, index) => (
            <div key={index} className="skill">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span>{skill.name}</span>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Skills;
