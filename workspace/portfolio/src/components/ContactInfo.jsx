import React from 'react';
import './ContactInfo.scss';

const ContactInfo = ({ phone }) => {
  return (
    <div className="contact-info">
      <h3>Contact Me</h3>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default ContactInfo;
