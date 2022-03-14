import React from "react";
// import { Link } from "react-router-dom";
import "./Itemspage.css";
import CharacterApi from "../../components/CharacterApi/CharacterApi";
import Header from "../../components/Header/Header";

function Itemspage() {
  return (
    <div className="itemspage-body">
      <Header />
      <div className="title">
        <p className="title-of-char">Description of the site and characters</p>
      </div>
      <CharacterApi />
    </div>
  );
}

export default Itemspage;
