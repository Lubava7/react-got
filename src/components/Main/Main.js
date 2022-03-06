import React, { useState } from "react";
import { Link } from "react-router-dom";
import Randomimg from "../Randomimg/Randomimg";
import "./Main.css";
import CircularProgress from "@mui/material/CircularProgress";

function Main() {
  const [mainCharacter, setMainCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
    return <CircularProgress />;
  }
  return (
    <body>
      <nav className="navigates">
        <Link className="link" to="/">
          Main
        </Link>
        <Link className="link" to="items">
          Characters
        </Link>
      </nav>
      <Randomimg mainCharacter={mainCharacter} />
    </body>
  );
}

export default Main;
