import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/common/Navbar.jsx'
import About from './components/about/About.jsx'
import Projects from './components/projects/Projects.jsx';
import Contact from './components/contact/Contact.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const projectsData = [
  {
    id: 1,
    title: "Awesome Project",
    thumbnail: process.env.PUBLIC_URL + '/momspickmain.png',
    brief: "d",
    screenType: 'desktop',
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
      process.env.PUBLIC_URL + '/cavendish1.jpg',
      process.env.PUBLIC_URL + '/cavendish1.jpg',
      process.env.PUBLIC_URL + '/cavendish1.jpg'
    ]
  },
  {
    id: 2,
    title: "Awesome Project",
    thumbnail: process.env.PUBLIC_URL + '/cavendishmain.png',
    brief: "d",
    screenType: 'mobile',
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
    screenType: 'desktop',
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
      <Helmet>
        <link rel="icon" type="image/x-icon" href="/cavendishmain.ico"></link>
      </Helmet>
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
