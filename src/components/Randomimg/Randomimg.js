import React from "react";
import "./Randomimg.css";
import questionmark from "../../images/questionmark.png";

function Randomimg({ mainCharacter }) {
  return (
    <div className="carousel">
      <div className="rand-photo">
        {mainCharacter.img ? (
          <img src={mainCharacter.img} alt="name" />
        ) : (
          <img className="png" src={questionmark} alt="?" />
        )}
      </div>

      <span className="span">
        {mainCharacter.name || mainCharacter.aliases}
      </span>

      <div className="description-random-char">
        <h1>{mainCharacter.name || mainCharacter.aliases}</h1>
        <p>gender:{mainCharacter.gender}</p>
        <p className="playedBy">playedBy:{mainCharacter.playedBy}</p>
        <p className="povBooks">povBooks:{mainCharacter.povBooks}</p>
      </div>
    </div>
  );
}

export default Randomimg;
