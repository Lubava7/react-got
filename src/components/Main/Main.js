import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Randomimg from "../Randomimg/Randomimg";
import "./Main.css";
import CircularProgress from "@mui/material/CircularProgress";
// import questionmark from "../../images/questionmark.png";
import Header from "../../components/Header/Header";
import PopupOpenButton from "../PopupOpenButton/PopupOpenButton";

function Main() {
  const [mainCharacter, setMainCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://anapioficeandfire.com/api/characters?pageSize=10")
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
    <div className="main-body">
      {/* <Link className="link-popup-button-main" to={`/`}>
        <PopupOpenButton />
      </Link> */}
      <Header />
      <Randomimg mainCharacter={mainCharacter} />

      <div className="title">
        <Link className="title-of-char" to="items">
          All Characters(like from books)
        </Link>
      </div>

      <div className="main-page-10">
        {items.map((item, index) => (
          <Link className="photo-name" to={`/items/${index + 1}`}>
            <div className="p-10">
              {/* <img className="png-items-page" src={questionmark} alt="?" /> */}
              <p>
                This div contains photo of the current character which matches
                his name. I dont have a photo yet but this doesnt change
                anything for us here.
              </p>
            </div>
            <li className="aliases">{item.name || item.aliases}</li>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Main;
