import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ project, onClick }) => {

  const backimg = process.env.PUBLIC_URL + '/black.png';
  return (
      <div className="project-card" onClick={() => onClick(project)}>
        <div className="front">
          <figure>
            <img src={project.thumbnail} alt="" />
            <figcaption>
            </figcaption>
          </figure>
        </div>
        <div className="back">
          <figure>
            <img src={backimg} alt="" />
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
