import React from "react";
import "./SiteDescription.css";

export default class SiteDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      facts: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((value) => {
        this.setState({ facts: value, isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading cat facts...</p>;
    }
    return (
      <div className="body">
        <div className="desc">
          {this.state.facts.map((fact) => {
            return <p>{fact.text} </p>;
          })}
        </div>
      </div>
    );
  }
}
