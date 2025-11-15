import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../style/Header.css";

function Header() {
  return (
    <header>
      <div className="top">
        <h2 className="header-name">Jay Chiang</h2>
        <h3 className="header-subtitle">
          <TypeAnimation
            sequence={[
              "Data Analyst & Engineer",
              2000,
              "Machine Learning Enthusiast",
              2000,
              "Problem Solver",
              2000,
              "Explore my professional journey...",
              3000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h3>
      </div>
    </header>
  );
}

export default Header;
