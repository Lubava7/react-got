import React from "react";
import "./InfSideBar.css";

class InfSideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="InfoLine">
        <ul>
          <li>
            <button className="Img Inf Link button"></button>
            <p>music</p>
          </li>
          <li>
            <button className="Img Inf Link button Persons"></button>
            <p>персонажи</p>
          </li>
          <li>
            <button className="Img Inf Link  button"></button>
            <p>music</p>
          </li>
          <li>
            <button className="Img Inf Link  button"></button>
            <p>music</p>
          </li>
          <li>
            <button className="Img Inf Link  button"></button>
            <p>music</p>
          </li>
          <li>
            <button className="Img Inf Link  button"></button>
            <p>music</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default InfSideBar;
