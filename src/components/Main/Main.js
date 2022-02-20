import React from "react";
import "./Main.css";
import CharacterApi from "../CharacterApi/CharacterApi";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <body>
        <div>
          <p>Description of the site and characters</p>
        </div>
        <CharacterApi />
      </body>
    );
  }
}
