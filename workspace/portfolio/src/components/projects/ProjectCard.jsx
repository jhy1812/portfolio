import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card-container">
      <div className="project-card" onClick={() => onClick(project)}>
        <div className="card-inner">
          <div className="card-face front">
            <img src={project.thumbnail} alt={project.title} />
          </div>
          <div className="card-face back">
            <div className="back-content">
              <h3>{project.title}</h3>
              <p>{project.brief}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
