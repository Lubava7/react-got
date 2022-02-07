import React from "react";
import "./CharacterApi.css";

export default class CharacterApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    fetch("https://anapioficeandfire.com/api/characters?pageSize=10")
      .then((res) => res.json())
      .then((value) => {
        this.setState({ items: value, isLoading: false });
        // console.log(value);
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
            return (
              <ul>
                <li>{item.aliases}</li>
                <li>{item.born}</li>
                <li>{item.culture}</li>
                <li>{item.died}</li>
                <li>{item.father}</li>
                <li>{item.gender}</li>
                <li>{item.mother}</li>
                <li>{item.name}</li>
                <li>{item.playedBy}</li>
                <li>{item.povBooks}</li>
                <li>{item.spouse}</li>
                <li>{item.titles}</li>
                <li>{item.url}</li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}
