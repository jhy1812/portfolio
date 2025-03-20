import './App.css';
import React from 'react';
import './index.css';
import Navbar from './components/common/Navbar.jsx'
import About from './components/about/About.jsx'
import Projects from './components/projects/Projects.jsx';
import Contact from './components/contact/Contact.jsx';
import Background from './components/common/Background.jsx';
import { Helmet } from 'react-helmet';

const projectsData = [
  {
    id: 1,
    title: "맘스픽",
    period: "2023.10.10 - 2023.11.17",
    overview: "A brief overview of the project highlighting its key goals and achievements.",
    description: "이 프로젝트는 부모님들을 대상으로 한 중고 육아용품 거래 플랫폼입니다. 주요 목표는 사용자의 위치 정보를 기반으로 근처에서 거래 가능한 육아용품을 쉽게 검색할 수 있도록 하고, 판매자와 구매자가 실시간 채팅을 통해 원활하게 소통할 수 있는 환경을 제공하는 것입니다. 또한, 최신 육아 정보를 제공하여 사용자들이 유용한 정보를 얻을 수 있도록 지원합니다.",
    screenType: "mobile",
    brief: "육아용품 중고거래 플랫폼",
    thumbnail: process.env.PUBLIC_URL + '/momspickmain.png', // or 'mobile'
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
    responsibilities: [
      "효율적인 데이터 저장 및 관리를 위해 테이블 구조를 설계하고 관계형 데이터베이스 모델을 구성함.",
      "사용자들이 자유롭게 게시글을 작성하고 조회할 수 있도록 CRUD(Create, Read, Update, Delete) API를 설계 및 구현함.",
      "사용자의 위치 정보를 활용하여 가까운 거래 가능 품목을 조회할 수 있도록 거리 계산 로직을 적용하고 최적화된 검색 기능을 구현함.",
      "사용자가 여러 개의 이미지를 업로드할 수 있도록 AWS S3 스토리지와 연동하여 확장성 높은 파일 저장 기능을 개발함.",
      "서비스에서 데이터를 효과적으로 활용할 수 있도록 가공 및 변환하여 API를 통해 클라이언트와 연동함.",
    ],
    architectureImage: process.env.PUBLIC_URL + '/mpar.png',
    presentationDownloadLink: process.env.PUBLIC_URL + '/C202_최종.pdf'
  },
  {
    id: 2,
    title: "캐번디시",
    period: "2023.08.23 - 2023.10.06",
    overview: "A brief overview of the project highlighting its key goals and achievements.",
    description: "빅데이터 기반 추천으로 최적의 컴퓨터를 찾아주고, 손쉬운 견적서 저장 기능과 자유로운 커뮤니티 소통을 통해 컴퓨터 선택과 구매를 더 편리하게 도와주는 플랫폼입니다.",
    screenType: "desktop",
    brief: "컴퓨터 추천 시스템",
    thumbnail: process.env.PUBLIC_URL + '/cavendishmain.png', // or 'mobile'
    images: [
      process.env.PUBLIC_URL + '/caven1.jpg',
      process.env.PUBLIC_URL + '/caven2.jpg',
      process.env.PUBLIC_URL + '/caven3.png',
      process.env.PUBLIC_URL + '/caven4.jpg',
      process.env.PUBLIC_URL + '/caven5.jpg',
      process.env.PUBLIC_URL + '/caven6.jpg',
      process.env.PUBLIC_URL + '/caven7.jpg',
      process.env.PUBLIC_URL + '/caven8.jpg',
    ],
    githubLink: "https://github.com/jhy1812/cavendish",
    technologies: [
      { name: "React", icon: process.env.PUBLIC_URL + '/Java-Dark.svg' },
      { name: "Node.js", icon: process.env.PUBLIC_URL + '/Python-Dark.svg' },
      { name: "Node.js", icon: process.env.PUBLIC_URL + '/Spring-Dark.svg' },
      { name: "Node.js", icon: process.env.PUBLIC_URL + '/FastAPI.svg' },
      { name: "MongoDB", icon: process.env.PUBLIC_URL + '/mariadb.svg' }
    ],
    responsibilities: [
      "제품 정보, 호환성 데이터, 사용자 선호도 등을 효율적으로 저장하고 관리할 수 있도록 데이터베이스 구조를 설계함.",
      "사용자 경험을 고려하여 직관적인 UI/UX를 적용하고, 추천 결과를 효과적으로 제공하는 메인 화면을 개발함.",
      "제품 검색, 필터링, 상세 조회 등 사용자가 원하는 정보를 빠르게 제공할 수 있도록 API를 설계 및 구현함.",
      " 컴퓨터 부품 간의 호환성을 판단하는 로직을 설계하고, 비트마스킹 기법을 활용하여 성능을 최적화함.",
    ],
    architectureImage: process.env.PUBLIC_URL + '/caar.png',
    presentationDownloadLink: process.env.PUBLIC_URL + '/C105_최종.pdf'
  },
  {
    id: 3,
    title: "버스킹",
    period: "2023.07.10 - 2023.08.18",
    overview: "A brief overview of the project highlighting its key goals and achievements.",
    description: "셔틀버스 이용의 불편함을 해결하기 위해 개발된 플랫폼으로, 실시간 버스 위치 추적 기능을 제공하여 변동이 심한 도착 시간 문제를 개선하고, 버스 기사님에게 하차지 정보를 전달하여 이용자와의 마찰을 줄이는 것을 목표로 합니다. 이를 통해 SSAFY 교육생들의 셔틀버스 이용 경험을 더욱 편리하고 원활하게 만듭니다.",
    screenType: "mobile",
    brief: "셔틀버스 위치 조회 어플리케이션",
    thumbnail: process.env.PUBLIC_URL + '/buskingmain.png', // or 'mobile'
    images: [
      process.env.PUBLIC_URL + '/bk1.png',
      process.env.PUBLIC_URL + '/bk2.png',
      process.env.PUBLIC_URL + '/bk3.png',
      process.env.PUBLIC_URL + '/bk4.png',
      process.env.PUBLIC_URL + '/bk5.png',
      process.env.PUBLIC_URL + '/bk6.png',
      process.env.PUBLIC_URL + '/bk7.png',
      process.env.PUBLIC_URL + '/bk8.png',
    ],
    githubLink: "https://github.com/comfort42/busking",
    technologies: [
      { name: "Javascript", icon: process.env.PUBLIC_URL + '/JavaScript.svg' },
      { name: "React.js", icon: process.env.PUBLIC_URL + '/React.svg' },
      { name: "Tailwind", icon: process.env.PUBLIC_URL + '/TailwindCSS-Dark.svg' },
      { name: "zustand", icon: process.env.PUBLIC_URL + '/Zustand.svg' }
    ],
    responsibilities: [
      "실시간 버스 위치 추적을 지원하는 지도 기반 UI를 개발하고, 직관적인 인터페이스를 설계하여 사용자 경험을 개선함.",
      "관리자가 손쉽게 버스 경로를 설정할 수 있도록 드래그 앤 드롭 방식의 경로 편집 기능을 구현함.",
      "버스의 실시간 위치 데이터를 벡터 연산을 활용하여 사전 정의된 경로에 자동으로 매칭하는 기능을 개발하여 정확도를 향상시킴.",
    ],    
    architectureImage: process.env.PUBLIC_URL + '/bkar.png',
    presentationDownloadLink: process.env.PUBLIC_URL + '/C108_최종.pdf'
  },
];
function App() {
  return (
    <div>
      <title>Jhy</title>
      <Helmet>
        <link rel="icon" type="image/x-icon" href="/cavendishmain.ico"></link>
      </Helmet>
        <Background></Background>
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
