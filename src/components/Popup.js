import React, { useState, useEffect } from "react";
import "../style/Popup.css";

const Popup = ({ onClose }) => {
  const [visible, setVisible] = useState(false);

  // Trigger enter animation after mount
  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 280); // wait for exit animation
  };

  return (
    <div
      className={`popup-overlay ${visible ? "popup-overlay--in" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`popup-card ${visible ? "popup-card--in" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top label */}
        <div className="popup-badge">AI Generated</div>

        {/* Close */}
        <button className="popup-close" onClick={handleClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Content */}
        <div className="popup-body">
          <p className="popup-main">
            This photo was created using generative AI technology.
          </p>
          <p className="popup-sub">
            I hope you like it.
          </p>
        </div>

        {/* Footer hint */}
        <p className="popup-hint">Click anywhere to dismiss</p>
      </div>
    </div>
  );
};

export default Popup;
