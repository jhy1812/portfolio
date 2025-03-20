import React from 'react';
import ProfilePicture from './ProfilePicture';
import Introduction from './Introduction';
import Skills from './Skills';
import CareerCalendar from './CareerCalendar';
import './About.scss';

const About = () => {
  // Define your skills array. Replace 'path_to_icon' with actual paths.
  const introTitle = '';
  const introText = '“자동차는 더 이상 단순한 기계제품이 아니라”라는 말씀에 큰 영감을 받아, 기술의 진보와 함께 소프트웨어의 역할이 점점 중요해지고 있다는 사실을 깨달았습니다. 이 계기로 프로그래밍에 관심을 갖게 되었고, 현재는 백엔드 개발 역량을 키우기 위해 꾸준히 학습하고 있습니다.새로운 도전에 대한 열정과 끊임없이 배우려는 자세로, 안정적이고 확장 가능한 시스템을 구축하는 백엔드 개발자로 성장하고자 합니다.'

  const skillsData = [
    { name: 'Java', icon: process.env.PUBLIC_URL + '/Java-Dark.svg' },
    { name: 'Python', icon: process.env.PUBLIC_URL + '/Python-Dark.svg' },
    { name: 'C++', icon: process.env.PUBLIC_URL + '/CPP.svg' },
    { name: 'Javascript', icon: process.env.PUBLIC_URL + '/JavaScript.svg' },
    { name: 'Spring', icon: process.env.PUBLIC_URL + '/Spring-Dark.svg' },
    { name: 'FastAPI', icon: process.env.PUBLIC_URL + '/FastAPI.svg' },
    { name: 'Django', icon: process.env.PUBLIC_URL + '/Django.svg' },
    { name: 'ReactJS', icon: process.env.PUBLIC_URL + '/React.svg' },
    { name: 'VueJS', icon: process.env.PUBLIC_URL + '/VueJS-Dark.svg' },
    { name: 'MySQL', icon: process.env.PUBLIC_URL + '/MySQL-Dark.svg' },
    { name: 'MariaDB', icon: process.env.PUBLIC_URL + '/mariadb.svg' },
    { name: 'Git', icon: process.env.PUBLIC_URL + '/Git.svg' },
    { name: 'CSS', icon: process.env.PUBLIC_URL + '/CSS.svg' },
    { name: 'Sass', icon: process.env.PUBLIC_URL + '/Sass.svg' },
  ];
  const imagePath = process.env.PUBLIC_URL + '/logo512.png';
  const careerEvents = [
    {
      year: '2023',
      period: '10.10 ~11.17',
      title: "자율 프로젝트 (서비스 명: 맘스픽)",
      description: '중고 육아 용품 거래 플랫폼',
      isStart: true,
    },
    {
      year: '2023',
      period: '09.01',
      title: "정보처리기사 취득",
      description: '',
      isStart: false,
    },
    {
      year: '2023',
      period: '08.23 ~10.06',
      title: "특화 프로젝트 (서비스 명: 캐번디시)",
      description: '컴퓨터 추천 시스템',
      isStart: false,
    },
    {
      year: '2023',
      period: '07.10 ~08.18',
      title: '공통 프로젝트 (서비스 명: 버스킹)',
      description: '셔틀 버스 위치 조회 서비스',
      isStart: false,
    },
    {
      year: '2023',
      period: '05.26',
      title: '삼성 청년 SW아카데미 1학기 성적우수상',
      description: '코딩 집중과정 종합성적 광주2반 1등',
      isStart: false,
    },
    {
      year: '2023',
      period: '05.08',
      title: 'SW 역량테스트 B형 취득',
      description: '',
      isStart: false,
    },
    {
      year: '2023',
      period: '01.04 ~12.29',
      title: '삼성 청년 SW 아카데미',
      description: '',
      isStart: false,
    },
    {
      year: '2022',
      period: '02.17',
      title: '서울과학기술대학교 기계자동차공학과 졸업',
      description: '',
      isStart: true,
    },
    {
      year: '2021',
      period: '01.10 ~12.20',
      title: '초소형 기전연구실 연구원',
      description: 'CNT와 SDC를 이용한 반도체식 가스센서 제작 및 특성 연구',
      isStart: true,
    },
    {
      year: '2019',
      period: '01.04 ~12.29',
      title: '초소형 기전연구실 연구원',
      description: '열효과가 첨가된 바람저항형 유속센서의 제작 및 실험',
      isStart: true,
    },
  ];
  return (
    <section id="about" className="about-section">
      <div className="container">

      <div className="left">
        <ProfilePicture src={imagePath} alt="Your Name" />
      </div>
      <div className="right">
      <Introduction 
  introTitle={introTitle}
  introText={introText}
  skills={skillsData}
/>
        {/* <Introduction 
          text="I am a developer passionate about creating innovative solutions. I enjoy working on full-stack projects and continuously learning new technologies."
        /> */}
        {/* <Skills skills={skillsData} /> */}
      </div>
      </div>
      <CareerCalendar events={careerEvents}></CareerCalendar>
    </section>
  );
};

export default About;
