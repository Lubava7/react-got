import React from "react";
import { Link } from "react-router-dom";
import "./Itemspage.css";
import CharacterApi from "../../components/CharacterApi/CharacterApi";

function Itemspage() {
  return (
    <body>
      <nav className="navigates">
        <Link className="link" to="/items">
          Characters
        </Link>
        <Link className="link" to={`/`}>
          Main
        </Link>
      </nav>
      <div className="title">
        <p className="title-of-char">Description of the site and characters</p>
      </div>
      <CharacterApi />
    </body>
  );
}

export default Itemspage;
