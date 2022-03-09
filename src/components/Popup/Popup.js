import React from "react";
import "./Popup.css";

function Popup({ open, children, onClose }) {
  if (!open) return null;
  return (
    <body>
      <div className="popup">
        <div className="popup-header">
          <div className="popup-title">Hello, that's what I learned</div>
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </div>
        <div className="popup-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
      <div className="overlay"></div>
    </body>
  );
}
export default Popup;
