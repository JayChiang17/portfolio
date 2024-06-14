import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import "../style/MainNav.css"; // 确保 CSS 文件路径正确

const MainNav = () => {
  return (
    <header className="navHeader">
      <nav className="nav">
        <button className="navButton">
          <NavLink smooth to="#aboutMe" activeClassName="activeLink">
            ABOUTME
          </NavLink>
        </button>
        <button className="navButton">
          <NavLink smooth to="#resume" activeClassName="activeLink">
            RESUME
          </NavLink>
        </button>
        <button className="navButton">
          <NavLink smooth to="#contactme" activeClassName="activeLink">
            CONTACT
          </NavLink>
        </button>
      </nav>
    </header>
  );
};

export default MainNav;
