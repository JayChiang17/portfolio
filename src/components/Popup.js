import React, { useState, useEffect, useRef, useCallback } from "react";
import "../style/Popup.css";

const FOCUSABLE_SELECTORS =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const Popup = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const modalRef = useRef(null);
  const prevFocusRef = useRef(null);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      prevFocusRef.current?.focus();
      onClose();
    }, 280);
  }, [onClose]);

  // Record previous focus + trigger enter animation
  useEffect(() => {
    prevFocusRef.current = document.activeElement;
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  // Focus trap + Escape key
  useEffect(() => {
    if (!visible || !modalRef.current) return;
    const focusableEls = Array.from(
      modalRef.current.querySelectorAll(FOCUSABLE_SELECTORS)
    );
    const first = focusableEls[0];
    const last = focusableEls[focusableEls.length - 1];
    first?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") { handleClose(); return; }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [visible, handleClose]);

  return (
    <div
      className={`popup-overlay ${visible ? "popup-overlay--in" : ""}`}
      onClick={handleClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        className={`popup-card ${visible ? "popup-card--in" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top label */}
        <div className="popup-badge" id="popup-title">AI Generated</div>

        {/* Close */}
        <button className="popup-close" onClick={handleClose} aria-label="Close dialog">
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
