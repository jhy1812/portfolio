import React, { useEffect, useRef } from 'react';
import './ProfilePicture.scss';

const ProfilePicture = ({ imageSrc, backgroundSrc, title }) => {
  const cardContainerRef = useRef(null);
  
  useEffect(() => {
    const cardContainer = cardContainerRef.current;
    if (!cardContainer) return;

    // For our single card, query its inner elements:
    const card = cardContainer.querySelector('.card');
    const image = card.querySelector('.card__img');
    const background = card.querySelector('.card__bg');
    const range = 40;
    const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1);
    let animationFrame;

    const mouseMoveHandler = (e) => {
      // Use requestAnimationFrame to throttle the updates
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      animationFrame = window.requestAnimationFrame(() => {
        const { clientX: x, clientY: y } = e;
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);

        // Apply 3D rotation to the card container
        card.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg) translateZ(35px)`;
        // Move the image inside the card
        image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
        // Adjust the background position for a subtle parallax effect
        background.style.backgroundPosition = `${xValue * 0.45}px ${-yValue * 0.45}px`;
      });
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="cards" ref={cardContainerRef}>
      <div className="card">
        <div
          className="card__bg"
          style={{
            background: `url(${process.env.PUBLIC_URL + 'code.jpg'}) center / cover no-repeat`
          }}
        ></div>
        <img className="card__img" src={process.env.PUBLIC_URL + '/profileremove.png'} alt={title} />
        <div className="card__text">
          <p className="card__title">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
