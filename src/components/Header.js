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
              "Data Engineer",
              2000,
              "Full-Stack Developer",
              2000,
              "Applied Data Science @ UMich",
              2000,
              "ML Pipelines & NLP",
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
