import React from "react";
import "./CharacterApi.css";

export default class CharacterApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    fetch("https://anapioficeandfire.com/api/characters?pageSize=10")
      .then((res) => res.json())
      .then((value) => {
        this.setState({ items: value });
        // console.log(value);
      });
  }
  render() {
    return (
      <div className="body">
        <div className="ulli">
          {this.state.items.map((item, i) => {
            return (
              <ul className="ul" key={i}>
                <a className="photo-name" href="./persSlip">
                  <img
                    className="image"
                    src="https://trikky.ru/wp-content/blogs.dir/1/files/2014/06/5034de27566479ab3669ce97448d883d.jpg"
                    border="0"
                  ></img>

                  <li className="name">{item.name}</li>
                  <li className="aliases">{item.aliases}</li>
                </a>

                {/* <li className="born">{item.born}</li>
                <li className="culture">{item.culture}</li>
                <li className="died">{item.died}</li>
                <li className="father">{item.father}</li>
                <li className="gender">{item.gender}</li>
                <li className="mother">{item.mother}</li>
                <li className="playedBy">{item.playedBy}</li>
                <li className="povBooks">{item.povBooks}</li>
                <li className="spouse">{item.spouse}</li>
                <li className="titles">{item.titles}</li>
                <li className="url">{item.url}</li> */}
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}

// import React from "react";
// import "./CharacterApi.css";

// export default class CharacterApi extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: [],
//       isLoading: true,
//     };
//   }
//   componentDidMount() {
//     fetch("https://anapioficeandfire.com/api/characters?pageSize=10")
//       .then((res) => res.json())
//       .then((value) => {
//         this.setState({ items: value, isLoading: false });
//         // console.log(value);
//       });
//   }

//   render() {
//     if (this.state.isLoading) {
//       return <p>Loading GOT ...</p>;
//     }
//     return (
//       <div className="body">
//         <div className="desc">
//           {this.state.items.map((item, i) => {
//             return (
//               <ul key={i}>
//                 <li>{item.aliases}</li>
//                 <li>{item.born}</li>
//                 <li>{item.culture}</li>
//                 <li>{item.died}</li>
//                 <li>{item.father}</li>
//                 <li>{item.gender}</li>
//                 <li>{item.mother}</li>
//                 <li>{item.name}</li>
//                 <li>{item.playedBy}</li>
//                 <li>{item.povBooks}</li>
//                 <li>{item.spouse}</li>
//                 <li>{item.titles}</li>
//                 <li>{item.url}</li>
//               </ul>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
