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
    title: "맘스픽",
    period: "2023.10.10 - 2023.11.17",
    overview: "A brief overview of the project highlighting its key goals and achievements.",
    description: "이 프로젝트는 부모님들을 대상으로 한 중고 육아용품 거래 플랫폼입니다. 주요 목표는 사용자의 위치 정보를 기반으로 근처에서 거래 가능한 육아용품을 쉽게 검색할 수 있도록 하고, 판매자와 구매자가 실시간 채팅을 통해 원활하게 소통할 수 있는 환경을 제공하는 것입니다. 또한, 최신 육아 정보를 제공하여 사용자들이 유용한 정보를 얻을 수 있도록 지원합니다.",
    screenType: "mobile",
    thumbnail: process.env.PUBLIC_URL + '/cavendishmain.png', // or 'mobile'
    images: [
      process.env.PUBLIC_URL + '/mspick1.png',
      process.env.PUBLIC_URL + '/mspick2.png',
      process.env.PUBLIC_URL + '/mspick3.png',
      process.env.PUBLIC_URL + '/mspick4.png',
      process.env.PUBLIC_URL + '/mspick5.png',
      process.env.PUBLIC_URL + '/mspick6.png',
      process.env.PUBLIC_URL + '/mspick7.png',
      process.env.PUBLIC_URL + '/mspick8.png',
      process.env.PUBLIC_URL + '/mspick9.png',
      process.env.PUBLIC_URL + '/mspick10.png',
      process.env.PUBLIC_URL + '/mspick11.png',
      process.env.PUBLIC_URL + '/mspick12.png',
    ],
    githubLink: "https://github.com/jhy1812/Moms-Pick",
    technologies: [
      { name: "Java", icon: process.env.PUBLIC_URL + '/Java-Dark.svg' },
      { name: "Python", icon: process.env.PUBLIC_URL + '/Python-Dark.svg' },
      { name: "Spring", icon: process.env.PUBLIC_URL + '/Spring-Dark.svg' },
      { name: "Fast API", icon: process.env.PUBLIC_URL + '/FastAPI.svg' },
      { name: "Mysql", icon: process.env.PUBLIC_URL + '/MySQL-Dark.svg' },
    ],
    responsibilities: "Led the development of core features, designed the architecture, and coordinated the team to implement a robust solution.",
    architectureImage: process.env.PUBLIC_URL + '/cavendishmain.png',
    presentationDownloadLink: process.env.PUBLIC_URL + '/docs/presentation.pdf'
  },
  {
    id: 2,
    title: "Awesome Project",
    period: "Jan 2020 - Dec 2020",
    overview: "A brief overview of the project highlighting its key goals and achievements.",
    description: "This project involved building a full-stack application using modern web technologies. It features a responsive design, interactive UI components, and robust backend services. The project was developed in an agile environment with continuous integration and deployment.",
    screenType: "desktop", // or 'mobile'
    thumbnail: process.env.PUBLIC_URL + '/cavendishmain.png', // or 'mobile'
    images: [
      process.env.PUBLIC_URL + '/cavendish1.jpg',
      process.env.PUBLIC_URL + '/cavendish1.jpg',
      process.env.PUBLIC_URL + '/cavendish1.jpg'
    ],
    githubLink: "https://github.com/username/awesome-project",
    technologies: [
      { name: "React", icon: process.env.PUBLIC_URL + '/icons/react.svg' },
      { name: "Node.js", icon: process.env.PUBLIC_URL + '/icons/node.svg' },
      { name: "MongoDB", icon: process.env.PUBLIC_URL + '/icons/mongodb.svg' }
    ],
    responsibilities: "Led the development of core features, designed the architecture, and coordinated the team to implement a robust solution.",
    architectureImage: process.env.PUBLIC_URL + '/images/architecture.png',
    presentationDownloadLink: process.env.PUBLIC_URL + '/광주_1반_C105_발표자료.pdf'
  },
  {
    id: 3,
    title: "Awesome Project",
    period: "Jan 2020 - Dec 2020",
    overview: "A brief overview of the project highlighting its key goals and achievements.",
    description: "This project involved building a full-stack application using modern web technologies. It features a responsive design, interactive UI components, and robust backend services. The project was developed in an agile environment with continuous integration and deployment.",
    screenType: "mobile", // or 'mobile'
    thumbnail: process.env.PUBLIC_URL + '/cavendishmain.png', // or 'mobile'
    images: [
      process.env.PUBLIC_URL + '/images/screen1.jpg',
      process.env.PUBLIC_URL + '/images/screen2.jpg',
      process.env.PUBLIC_URL + '/images/screen3.jpg'
    ],
    githubLink: "https://github.com/username/awesome-project",
    technologies: [
      { name: "React", icon: process.env.PUBLIC_URL + '/icons/react.svg' },
      { name: "Node.js", icon: process.env.PUBLIC_URL + '/icons/node.svg' },
      { name: "MongoDB", icon: process.env.PUBLIC_URL + '/icons/mongodb.svg' }
    ],
    responsibilities: "Led the development of core features, designed the architecture, and coordinated the team to implement a robust solution.",
    architectureImage: process.env.PUBLIC_URL + '/cavendishmain.png',
    presentationDownloadLink: process.env.PUBLIC_URL + '/docs/presentation.pdf'
  },
];
function App() {
  return (
    <div>
      <title>Jhy</title>
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
