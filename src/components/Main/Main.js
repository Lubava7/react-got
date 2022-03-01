import React from "react";
import "./Main.css";
import CharacterApi from "../CharacterApi/CharacterApi";

function Main() {
  return (
    <body>
      <div>
        <p>Description of the site and characters</p>
      </div>
      <CharacterApi />
    </body>
  );
}

export default Main;
