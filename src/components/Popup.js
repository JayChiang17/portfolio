import React from "react";
import "../style/Popup.css";

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <p>My photo is still being produced...&#x1F60A;</p>
        <p>It show a younger me</p>
        <p>Please excuse its quality.</p>
      </div>
    </div>
  );
};

export default Popup;
