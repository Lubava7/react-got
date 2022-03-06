// import React, { useState } from "react";
import "./Randomimg.css";
// import { images } from "../../Helpers/RandImgData";

function Randomimg({ mainCharacter }) {
  return (
    <div className="carousel">
      <div>
        {mainCharacter.img ? <img src={mainCharacter.img} /> : <p>?</p>}
      </div>
      <span>{mainCharacter.name || mainCharacter.aliases}</span>
    </div>
  );
}

export default Randomimg;
