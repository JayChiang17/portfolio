import React, { useEffect, useRef, useCallback } from "react";
import "../style/PDFModal.css";

const PDFModal = ({ onClose }) => {
  const modalRef = useRef(null);
  const prevFocusRef = useRef(document.activeElement);

  const handleClose = useCallback(() => {
    prevFocusRef.current?.focus();
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleClose]);

  return (
    <div
      className="pdf-overlay"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Preview"
    >
      <div
        ref={modalRef}
        className="pdf-modal"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="pdf-modal-header">
          <span className="pdf-modal-title">Jay Chiang — Resume</span>
          <div className="pdf-modal-actions">
            <a
              href="/portfolio/Jay_Chiang_Resume.pdf"
              download="Jay_Chiang_Resume.pdf"
              className="pdf-download-btn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download
            </a>
            <button className="pdf-close-btn" onClick={handleClose} aria-label="Close preview">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="18" height="18">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="pdf-embed-wrap">
          <iframe
            src="/portfolio/Jay_Chiang_Resume.pdf"
            title="Jay Chiang Resume"
            className="pdf-iframe"
          />
        </div>
      </div>
    </div>
  );
};

export default PDFModal;
