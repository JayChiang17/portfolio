import React from "react";
import "../style/MainNav.css";

const MainNav = () => {
  const scrollToSection = (sectionId) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="navHeader">
      <nav className="nav">
        <button className="navButton" onClick={() => scrollToSection('top')}>
          HOME
        </button>
        <button className="navButton" onClick={() => scrollToSection('aboutMe')}>
          ABOUT
        </button>
        <button className="navButton" onClick={() => scrollToSection('experience')}>
          EXPERIENCE
        </button>
        <button className="navButton" onClick={() => scrollToSection('skills')}>
          SKILLS
        </button>
        <button className="navButton" onClick={() => scrollToSection('projects')}>
          PROJECTS
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
