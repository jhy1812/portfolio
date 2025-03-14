import React, { useState, useRef, useEffect } from 'react';
import './Navbar.scss';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  // Track which nav item is active
  const [activeIndex, setActiveIndex] = useState(0);
  // Store the underline's left position and width
  const [underlineStyle, setUnderlineStyle] = useState({});
  // Create a ref array for nav items
  const navRefs = useRef([]);

  // Update underline style based on the active nav item
  const updateUnderline = (index) => {
    if (navRefs.current[index]) {
      const node = navRefs.current[index];
      setUnderlineStyle({
        left: node.offsetLeft,
        width: node.offsetWidth,
      });
    }
  };

  // Update underline when active index changes
  useEffect(() => {
    updateUnderline(activeIndex);
  }, [activeIndex]);

  // Update underline on window resize
  useEffect(() => {
    const handleResize = () => {
      updateUnderline(activeIndex);
    };
    window.addEventListener('resize', handleResize);
    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  // Scroll spy: update active index based on scroll position
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const handleScroll = () => {
      // Use the vertical center of the viewport as the reference point
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
    // Run once on mount
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
