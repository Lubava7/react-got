import React from "react";
import "./Main.css";
import CharacterApi from "../CharacterApi/CharacterApi";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <CharacterApi />;
  }
}
