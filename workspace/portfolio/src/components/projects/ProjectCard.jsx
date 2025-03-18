import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ project, onClick }) => {
  const handleMouseMove = (e) => {
    const back = e.currentTarget;
    const rect = back.getBoundingClientRect();
    // Calculate mouse position relative to the button
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    back.style.setProperty('--x', `${x}px`);
    back.style.setProperty('--y', `${y}px`);
  };
  return (
      <div className="project-card" onClick={() => onClick(project)}>
        <div className="front">
          <figure>
            <img src={project.thumbnail} alt="" />
            <figcaption>
            </figcaption>
          </figure>
        </div>
        <div className="back" onMouseMove={handleMouseMove}>
          <figure>
            {/* <img src={backimg} alt="" /> */}
            <div></div>
            <figcaption>
              <h3>{project.title}</h3>
              <p>{project.brief}</p>
            </figcaption>
          </figure>
        </div>
      </div>
  );
};

export default ProjectCard;
