import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Randomimg from "../Randomimg/Randomimg";
import "./Main.css";
import CircularProgress from "@mui/material/CircularProgress";
// import questionmark from "../../images/questionmark.png";
import Header from "../../components/Header/Header";
// import PopupOpenButton from "../PopupOpenButton/PopupOpenButton";

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
      <Header />
      <div className="all-upper-div">
        <div className="upper-random-desc">
          <p className="pup">Добро пожаловать на Game Of Thrones вики!</p>
          <hr className="hr-line" />
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
            без заметных изменений пять веков, но и перешагнул в электронный
            дизайн. Его популяризации в новое время послужили публикация листов
            Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее
            время, программы электронной вёрстки типа Aldus PageMaker, в
            шаблонах которых используется Lorem Ipsum.
          </p>
          {/* </div> */}
        </div>

        <div className="random-plus-p10-div">
          <Randomimg mainCharacter={mainCharacter} />
          {/* 
          <div className="title">
            <Link className="title-of-char" to="items">
              All Characters(like from books)
            </Link>
          </div> */}
          <hr className="hr-line" color="grey" />
          <div className="main-page-10">
            <Link className="title-of-char" to="items">
              All Characters(like from books)
            </Link>
            {items.map((item, index) => (
              <Link className="photo-name" to={`/items/${index + 1}`}>
                <div className="p-10">
                  {/* <img className="png-items-page" src={questionmark} alt="?" /> */}
                  {/* <p>
                    This div contains photo of the current character which
                    matches his name. I dont have a photo yet but this doesnt
                    change anything for us here.
                  </p> */}
                  <p>PHOTO</p>
                </div>
                <li className="aliases">{item.name || item.aliases}</li>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
