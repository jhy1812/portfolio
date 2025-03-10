import React from 'react';
import ProfilePicture from './ProfilePicture';
import Introduction from './Introduction';
import Skills from './Skills';
import './About.scss';

const About = () => {
  // Define your skills array. Replace 'path_to_icon' with actual paths.
  const skillsData = [
    { name: 'React', icon: process.env.PUBLIC_URL + 'CPP.svg' },
    { name: 'Vue', icon: process.env.PUBLIC_URL + 'CPP.svg' },
    { name: 'Angular', icon: process.env.PUBLIC_URL + 'CPP.svg' },
    { name: 'Node.js', icon: 'path_to_node_icon.png' },
    { name: 'Express', icon: 'path_to_express_icon.png' },
    { name: 'MongoDB', icon: 'path_to_mongodb_icon.png' },
    // Add additional skills as needed
  ];
  const imagePath = process.env.PUBLIC_URL + '/logo512.png';

  return (
    <section id="about" className="about-section">
      <div className="left">
        <ProfilePicture src={imagePath} alt="Your Name" />
      </div>
      <div className="right">
        <Introduction 
          text="I am a developer passionate about creating innovative solutions. I enjoy working on full-stack projects and continuously learning new technologies."
        />
        <Skills skills={skillsData} />
      </div>
    </section>
  );
};

export default About;
