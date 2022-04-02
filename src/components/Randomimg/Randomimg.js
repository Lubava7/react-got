import React from "react";
import "./Randomimg.css";
// import questionmark from "../../images/questionmark.png";

function Randomimg({ mainCharacter }) {
  return (
    <div className="carousel">
      <div className="rand-photo">
        {/* {mainCharacter.img ? (
          <img src={mainCharacter.img} alt="name" />
        ) : (
          <img className="png-random-img" src={questionmark} alt="?" />
        )} */}

        <span className="span">
          {mainCharacter.name || mainCharacter.aliases}
        </span>

        <div className="p-descript">
          {/* <p>
            This div contains photo of the current character which matches his
            name. I dont have a photo yet but this doesnt change anything for us
            here.
          </p> */}
          <p>PHOTO</p>
        </div>
      </div>

      <div className="description-random-char">
        <h1 className="h1-random">
          {mainCharacter.name || mainCharacter.aliases}
        </h1>
        <p>gender:{mainCharacter.gender}</p>
        <p className="playedBy">playedBy:{mainCharacter.playedBy}</p>
        <p className="povBooks">povBooks:{mainCharacter.povBooks}</p>
      </div>
    </div>
  );
}

export default Randomimg;
