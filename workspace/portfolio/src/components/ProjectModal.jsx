import React from 'react';
import Carousel from './Carousel';
import './ProjectModal.scss';

const ProjectModal = ({ project, onClose }) => {
  // Closes the modal if the click is on the overlay (outside the modal content)
  const handleOverlayClick = (e) => {
    // Check if the clicked target is the overlay itself
    if (e.target.classList.contains('project-modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="project-modal-overlay" onClick={handleOverlayClick}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-content">
          <div className="modal-carousel">
            <Carousel images={project.images} />
          </div>
          <div className="modal-info">
            <h2>{project.title}</h2>
            <p className="overview">{project.overview}</p>
            <p className="description">{project.description}</p>
            {project.features && project.features.length > 0 && (
              <ul className="features">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <div key={index} className="tech-icon">
                  <img src={tech.icon} alt={tech.name} title={tech.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
