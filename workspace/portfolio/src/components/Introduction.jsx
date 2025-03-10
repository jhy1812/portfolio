import React from 'react';
import './Introduction.scss';

const Introduction = ({ text }) => {
  return (
    <div className="introduction">
      <h3>About Me</h3>
      <p>{text}</p>
    </div>
  );
};

export default Introduction;
