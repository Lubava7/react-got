import React from "react";
import "./SiteDescription.css";

export default class SiteDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    fetch("https://anapioficeandfire.com/api/characters?pageSize=20")
      .then((res) => res.json())
      .then((value) => {
        this.setState({ items: value, isLoading: false });
        // console.log(val);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading GOT ...</p>;
    }
    return (
      <div className="body">
        <div className="desc">
          {this.state.items.map((item) => {
            return <p>{item.aliases} </p>;
          })}
        </div>
      </div>
    );
  }
}
