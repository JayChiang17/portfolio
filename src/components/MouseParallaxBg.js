import React, { useEffect, useRef } from "react";
import "../style/MouseParallaxBg.css";

const MouseParallaxBg = () => {
  const layer1 = useRef(null);
  const layer2 = useRef(null);
  const layer3 = useRef(null);

  useEffect(() => {
    let ticking = false;

    const onMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const cx = window.innerWidth / 2;
          const cy = window.innerHeight / 2;
          const dx = (e.clientX - cx) / cx;
          const dy = (e.clientY - cy) / cy;

          if (layer1.current)
            layer1.current.style.transform = `translate(${dx * 18}px, ${dy * 18}px)`;
          if (layer2.current)
            layer2.current.style.transform = `translate(${dx * -28}px, ${dy * -28}px)`;
          if (layer3.current)
            layer3.current.style.transform = `translate(${dx * 10}px, ${dy * 10}px)`;

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div className="parallax-bg" aria-hidden="true">
      {/* Layer 1 — slow drift, large circles */}
      <div ref={layer1} className="parallax-layer">
        <div className="geo geo-circle geo-c1" />
        <div className="geo geo-circle geo-c2" />
      </div>

      {/* Layer 2 — counter drift, diamonds/rings */}
      <div ref={layer2} className="parallax-layer">
        <div className="geo geo-ring geo-r1" />
        <div className="geo geo-ring geo-r2" />
        <div className="geo geo-diamond geo-d1" />
      </div>

      {/* Layer 3 — subtle dots grid drift */}
      <div ref={layer3} className="parallax-layer">
        <div className="geo geo-dot-grid" />
        <div className="geo geo-line geo-l1" />
        <div className="geo geo-line geo-l2" />
      </div>
    </div>
  );
};

export default MouseParallaxBg;
