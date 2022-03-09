import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Randomimg from "../Randomimg/Randomimg";
import "./Main.css";
import CircularProgress from "@mui/material/CircularProgress";
import questionmark from "../../images/questionmark.png";

import PopupOpenButton from "../../components/PopupOpenButton/PopupOpenButton";

function Main() {
  const [mainCharacter, setMainCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://anapioficeandfire.com/api/characters?pageSize=12")
      .then((res) => res.json())
      .then((value) => {
        setItems(value);
      });
  }, []);

  React.useEffect(() => {
    const getRandomCharacter = () => {
      const randomId = Math.floor(Math.random() * 50);
      fetch(`https://anapioficeandfire.com/api/characters/${randomId}`)
        .then((res) => res.json())
        .then((value) => {
          setMainCharacter(value);
          setIsLoading(false);
        });
    };
    getRandomCharacter();
  }, []);

  if (isLoading) {
    return (
      <CircularProgress
        className="CircularProgress"
        sx={{
          color: "green",
        }}
      />
    );
  }
  return (
    <body className="main-body">
      <nav className="navigates">
        <Link className="link" to="items">
          Characters
        </Link>
        <Link className="link" to={`/`}>
          Main
        </Link>
        <Link className="link" to={`/`}>
          <PopupOpenButton />
        </Link>
      </nav>

      {/* <div className="randomimg"> */}
      <Randomimg mainCharacter={mainCharacter} />
      {/* </div> */}

      <div className="title">
        <Link className="title-of-char" to="items">
          All Characters(like from books)
        </Link>
      </div>

      <div className="main-page-10">
        {items.map((item, index) => (
          <Link className="photo-name" to={`/items/${index + 1}`}>
            <img className="png-items-page" src={questionmark} alt="?" />
            <li className="aliases">
              {item.aliases}
              {item.name}
            </li>
          </Link>
        ))}
      </div>
    </body>
  );
}

export default Main;
