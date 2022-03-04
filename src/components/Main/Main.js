import React from "react";
import { Link } from "react-router-dom";
import Randomimg from "../Randomimg/Randomimg";
import "./Main.css";

function Main() {
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
      <Randomimg />
    </body>
  );
}

export default Main;
