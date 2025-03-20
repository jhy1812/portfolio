import React from 'react';
import Carousel from './Carousel';
import './ProjectModal.scss';
import CustomButton from '../common/CustomButton';

const ProjectModal = ({ project, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('project-modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="project-modal-overlay" onClick={handleOverlayClick}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-content">
          <div className="modal-top">
            <div className="modal-carousel">
              <Carousel project={project} />
            </div>
            <div className="modal-info-top">
              <h1 className="project-name">{project.title}</h1>
              <p className="project-period">진행기간 : {project.period}</p>
              
              <div className="technologies">
                <h1>사용기술</h1>
                <div className="tech-container">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="tech-icon">
                    <img src={tech.icon} alt={tech.name} title={tech.name} />
                  </div>
                ))}

                </div>
              </div>
              <div className="project-description">
              <h1>프로젝트 개요</h1>
              <p>{project.description}</p>
              </div>
              <div className="project-link">

              <a 
                className="github-link" 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={process.env.PUBLIC_URL + '/Github-Dark.svg'}></img>
                &nbsp;GitHub
              </a>
              <CustomButton 
              onClick={() => window.open(project.presentationDownloadLink, '_blank')}
            >
              Presentation
            </CustomButton>
              </div>
            </div>
          </div>
          <div className="modal-bottom">
            <div className="responsibilities">
              <h2>담당 업무</h2>
                <ul>
                  {project.responsibilities.map((item, index) => {
                    return (
                      <li>{item}</li>
                    )
                  })}

                </ul>
            </div>
            <div className="architecture">
              <h2>Architecture</h2>
              <img src={project.architectureImage} alt="Architecture Diagram" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
