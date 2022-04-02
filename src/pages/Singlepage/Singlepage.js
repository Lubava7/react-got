import React from "react";
import "./Singlepage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
// import questionmark from "../../images/questionmark.png";

import Header from "../../components/Header/Header";

function Singlepage() {
  const { aliases } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://anapioficeandfire.com/api/characters/${aliases}`)
      .then((res) => res.json())
      .then((value) => {
        setItem(value);
        setIsLoading(false);
      });
  }, [aliases]);

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
    <div className="singlepage-main-div">
      <Header />

      <div className="img-n-h1">
        <div className="item-img">
          <p classname="p-photo-single">
            This div contains photo of the current character which matches his
            name. I dont have a photo yet but this doesnt change anything for us
            here.
          </p>
          {/* {item.img ? (
            <img src={item.img} alt="name" />
          ) : (
            <img className="png" src={questionmark} alt="?" />
          )} */}
        </div>
        {item && (
          <div className="h1">
            <h1>{item.name || item.aliases}</h1>
            <p>gender:{item.gender}</p>
            <p className="born">born:{item.born}</p>
            <p className="culture">culture:{item.culture}</p>
            <p className="died">died:{item.died}</p>
            <p className="father">father:{item.father}</p>
            <p className="mother">mother:{item.mother}</p>
            <p className="playedBy">playedBy:{item.playedBy}</p>
            <p className="povBooks">povBooks:{item.povBooks}</p>
            <p className="spouse">spouse:{item.spouse}</p>
            <p className="titles">titles:{item.titles}</p>
            {/* <p className="url">url:{item.url}</p> */}
          </div>
        )}
      </div>
    </div>
  );
}
export default Singlepage;
