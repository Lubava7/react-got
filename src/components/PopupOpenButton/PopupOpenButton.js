import React from "react";
import "./PopupOpenButton.css";
import Popup from "../../components/Popup/Popup";

function PopupOpenButton() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="popup-open-button">
        show introduction
      </button>
      <Popup open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default PopupOpenButton;
