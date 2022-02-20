import React from "react";
import "./PageNotFound.css";

export default class PageNotFound extends React.Component {
  render() {
    return (
      <div className="notfound">
        <p>This page doesn't exist. Go home.</p>
      </div>
    );
  }
}
