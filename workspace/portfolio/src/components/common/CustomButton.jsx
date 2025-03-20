import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, ...props }) => {
  const handleMouseMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  };

  return (
    <button className="btn" onMouseMove={handleMouseMove} {...props}>
      <span>{children}</span>
    </button>
  );
};

export default CustomButton;
