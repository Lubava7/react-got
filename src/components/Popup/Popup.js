import React from "react";
import "./Popup.css";

function Popup({ open, onClose }) {
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
          <p>
            I will illustrate you what I learned in the process of creating this
            site.
          </p>

          <p>
            1.The first and most important thing I learned how to properly use
            the React Router routing library, its classes and attributes.
          </p>
          <p>
            2.Further , I learned how to properly import components from React
            UI library, which made it very easy to create an interface.
          </p>
          <p>
            3.Also I figured out how to extract API data.(Specifically, here are
            the names of the characters and information about them.)
          </p>
          <p>
            4.The first and most important thing I learned was API data
            extraction.(Specifically, here are the names of the characters and
            information about them.)
          </p>
          <p>
            5.The first and most important thing I learned was API data
            extraction.(Specifically, here are the names of the characters and
            information about them.)
          </p>
          <p>
            6.The first and most important thing I learned was API data
            extraction.(Specifically, here are the names of the characters and
            information about them.)
          </p>
        </div>
      </div>
      <div className="overlay"></div>
    </body>
  );
}
export default Popup;
