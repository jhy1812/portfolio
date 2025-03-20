import React, { useState, useEffect } from 'react';
import './Carousel.scss';

const Carousel = ({ project }) => {
  const { images, screenType, title, description } = project;
  
  const extendedImages = [images[images.length - 1], ...images, images[0]];
  const total = images.length; 

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => prev + 1);
    setTransitionEnabled(true);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => prev - 1);
    setTransitionEnabled(true);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === extendedImages.length - 1) {
      setTransitionEnabled(false);
      setCurrentIndex(1);
    }
    if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(extendedImages.length - 2);
    }
    setTimeout(() => {
      setTransitionEnabled(true);
      setIsAnimating(false);
    }, 20);
  };

  return (
    <div className={`carousel-container ${screenType}`}>
      <div 
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transitionEnabled ? 'transform 0.5s ease' : 'none'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={title} />
          </div>
        ))}
      </div>
      <button className="button button_prev" onClick={handlePrev}></button>
      <button className="button button_next" onClick={handleNext}></button>
    </div>
  );
};

export default Carousel;
