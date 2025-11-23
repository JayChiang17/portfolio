import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../style/Header.css";
import "../style/HighlightEffects.css";

function Header() {
  return (
    <header>
      <div className="top shimmer">
        <h2 className="header-name gradient-text">Jay Chiang</h2>
        <h3 className="header-subtitle">
          <TypeAnimation
            sequence={[
              "Software Engineer",
              2000,
              "Data Analyst & Engineer",
              2000,
              "Machine Learning Enthusiast",
              2000,
              "Attention is all you need",
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
