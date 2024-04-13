import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import "../style/MainNav.css"; // 确保 CSS 文件路径正确

const MainNav = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <button className="button">
          <NavLink smooth to="#aboutMe" activeClassName="active-link">
            ABOUTME
          </NavLink>
        </button>
        <button className="button">
          <NavLink smooth to="#resume" activeClassName="active-link">
            RESUME
          </NavLink>
        </button>
        <button className="button">
          <NavLink smooth to="#contactme" activeClassName="active-link">
            CONTACT
          </NavLink>
        </button>
      </nav>
    </header>
  );
};

export default MainNav;
