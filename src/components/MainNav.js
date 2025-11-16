import React from "react";
import "../style/MainNav.css";

const MainNav = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="navHeader">
      <nav className="nav">
        <button className="navButton" onClick={() => scrollToSection('aboutMe')}>
          ABOUTME
        </button>
        <button className="navButton" onClick={() => scrollToSection('resume')}>
          RESUME
        </button>
        <button className="navButton" onClick={() => scrollToSection('contactme')}>
          CONTACT
        </button>
      </nav>
    </header>
  );
};

export default MainNav;
