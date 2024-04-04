import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import "../style/MainNav.css"; // 确保 CSS 文件路径正确

const MainNav = () => {
  // 定义导航链接数组
  const navLinks = [
    { to: "/#aboutMe", text: "ABOUTME" },
    { to: "/#resume", text: "RESUME" },
    { to: "/#contactme", text: "CONTACT" },
  ];

  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul>
          {" "}
          {/* 使用 ul 元素包裹导航项 */}
          {navLinks.map((link, index) => (
            <li key={index} className="button">
              {" "}
              {/* 使用 li 元素作为单个导航项 */}
              <NavLink smooth to={link.to} activeClassName="active-link">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
