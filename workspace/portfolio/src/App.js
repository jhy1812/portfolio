import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    title: "Awesome Project",
    thumbnail: process.env.PUBLIC_URL + '/momspickmain.png',
    brief: "d",
    overview: "A brief overview of the project.",
    description: "A detailed description of the project goes here...",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    technologies: [
      { name: "React", icon: process.env.PUBLIC_URL + 'CPP.svg' },
      { name: "Node.js", icon: process.env.PUBLIC_URL + 'CPP.svg' }
    ],
    images: [
      process.env.PUBLIC_URL + '/mp1.jpg',
      process.env.PUBLIC_URL + '/mp1.jpg',
      process.env.PUBLIC_URL + '/mp1.jpg'
    ]
  },
  {
    id: 2,
    title: "Awesome Project",
    thumbnail: process.env.PUBLIC_URL + '/cavendishmain.png',
    brief: "d",
    overview: "A brief overview of the project.",
    description: "A detailed description of the project goes here...",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    technologies: [
      { name: "React", icon: process.env.PUBLIC_URL + 'CPP.svg' },
      { name: "Node.js", icon: process.env.PUBLIC_URL + 'CPP.svg' }
    ],
    images: [
      process.env.PUBLIC_URL + '/mp1.jpg',
      process.env.PUBLIC_URL + '/mp1.jpg',
      process.env.PUBLIC_URL + '/logo512.png'
    ]
  },
  {
    id: 3,
    title: "Awesome Project",
    thumbnail: process.env.PUBLIC_URL + '/buskingmain.png',
    brief: "d",
    overview: "A brief overview of the project.",
    description: "A detailed description of the project goes here...",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    technologies: [
      { name: "React", icon: process.env.PUBLIC_URL + 'CPP.svg' },
      { name: "Node.js", icon: process.env.PUBLIC_URL + 'CPP.svg' }
    ],
    images: [
      process.env.PUBLIC_URL + '/mp1.jpg',
      process.env.PUBLIC_URL + '/mp1.jpg',
      process.env.PUBLIC_URL + '/logo512.png'
    ]
  },
  // Add more projects as needed
];
function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects projects={projectsData}/>
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
