import React, { useState, useRef, useEffect } from 'react';
import './Navbar.scss';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRefs = useRef([]);

  const updateUnderline = (index) => {
    if (navRefs.current[index]) {
      const node = navRefs.current[index];
      setUnderlineStyle({
        left: node.offsetLeft,
        width: node.offsetWidth,
      });
    }
  };

  useEffect(() => {
    updateUnderline(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    const handleResize = () => {
      updateUnderline(activeIndex);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let newIndex = activeIndex;
      sectionIds.forEach((id, index) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            newIndex = index;
          }
        }
      });
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li
            key={index}
            ref={(el) => (navRefs.current[index] = el)}
            className={`nav-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <span className="underline" style={underlineStyle} />
    </nav>
  );
};

export default Navbar;
