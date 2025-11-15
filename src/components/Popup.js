import React from "react";
import "../style/Popup.css";

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <p>
          This photo of me was created using generative AI technology.&#x1F60A;
        </p>
        <p>I hope you like it</p>
      </div>
    </div>
  );
};

export default Popup;
