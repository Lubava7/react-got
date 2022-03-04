import React from "react";
import { Link } from "react-router-dom";
import "./Itemspage.css";
import CharacterApi from "../../components/CharacterApi/CharacterApi";

function Itemspage() {
  return (
    <body>
      <div>
        <p>Description of the site and characters</p>
        <Link to={`/`}>back to main link</Link>
      </div>
      <CharacterApi />
    </body>
  );
}

export default Itemspage;
