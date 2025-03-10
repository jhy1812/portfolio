import React, { useState } from 'react';
import './Carousel.scss';

const Carousel = () => {
  // Rotation state in degrees
  const [rotation, setRotation] = useState(0);

  // Increase rotation by 90° on Prev click
  const handlePrev = () => {
    setRotation(prev => prev + 90);
  };

  // Decrease rotation by 90° on Next click
  const handleNext = () => {
    setRotation(prev => prev - 90);
  };

  return (
    <div className="screen">
      <div 
        className="background" 
        style={{ filter: `hue-rotate(${rotation}deg)` }}
      ></div>
      <div 
        className="stage" 
        style={{ transform: `rotateZ(${rotation}deg)` }}
      >
        <div className="page">
          <svg className="cupcake">
            <use xlinkHref="#cupcake"></use>
          </svg>
          <img src={process.env.PUBLIC_URL + 'profileimg.jpg'} alt="" />
        </div>
        <div className="page">
          <svg className="cupcake">
            <use xlinkHref="#food"></use>
          </svg>
          <h1>Divine Doughnuts</h1>
          <p>Delicious icing and that soft pastry!</p>
          <div className="button_fake">Fake</div>
        </div>
        <div className="page">
          <svg className="cupcake">
            <use xlinkHref="#dessert"></use>
          </svg>
          <h1>Precious Pancakes</h1>
          <p>Dripping with butter and maple syrup...</p>
          <div className="button_fake">Fake</div>
        </div>
        <div className="page">
          <svg className="cupcake">
            <use xlinkHref="#muffin"></use>
          </svg>
          <h1>Magic Muffins</h1>
          <p>Succulent dough, bathed in soft icing!</p>
          <div className="button_fake">Fake</div>
        </div>
      </div>
      <button className="button button_prev" onClick={handlePrev}>
        <svg className="arrow">
          <use xlinkHref="#left-arrow"></use>
        </svg>
      </button>
      <button className="button button_next" onClick={handleNext}>
        <svg className="arrow">
          <use xlinkHref="#right-arrow"></use>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
