import React from "react";
import { useParams } from "react-router-dom";

const PersSlip = () => {
  console.log(useParams());
  return <div className="div1">1</div>;
};

export default PersSlip;

// 222222222222222222222222

// import React from "react";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Main from "../../components/Main/Main";

// export default function PersSlip() {
//   const { index } = useParams();
//   const { value } = useState(null);

//   useEffect(() => {
//     fetch("https://anapioficeandfire.com/api/characters?pageSize=10")
//       .then((res) => res.json())
//       .then((value) => {
//         this.setState({ value });
//       });
//   }, [index]);
//   return <div>{value.index}</div>;
// }

// 111111111111111111

// import React from "react";
// import "./PersSlip.css";
// import { useParams } from "react-router-dom";

// export default class PersSlip extends React.Component {
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
//         console.log(value);
//       });
//   }
//   render() {
//     if (this.state.isLoading) {
//       return <p>Loading GOT ...</p>;
//     }
//     return (
//       <div className="body">
//         <div className="ulli">
//           {this.state.items.map((item, i) => {
//             return (
//               <ul className="ul" key={i}>
//                 <div className="photo-name">
//                   <li>
//                     <img
//                       className="image"
//                       src="https://trikky.ru/wp-content/blogs.dir/1/files/2014/06/5034de27566479ab3669ce97448d883d.jpg"
//                     ></img>
//                   </li>
//                   <li className="name">{item.name}</li>
//                   <li className="aliases">{item.aliases}</li>
//                 </div>
//                 <li className="aliases">{item.aliases}</li>
//                 <li className="born">{item.born}</li>
//                 <li className="culture">{item.culture}</li>
//                 <li className="died">{item.died}</li>
//                 <li className="father">{item.father}</li>
//                 <li className="gender">{item.gender}</li>
//                 <li className="mother">{item.mother}</li>
//                 <li className="playedBy">{item.playedBy}</li>
//                 <li className="povBooks">{item.povBooks}</li>
//                 <li className="spouse">{item.spouse}</li>
//                 <li className="titles">{item.titles}</li>
//                 <li className="url">{item.url}</li>
//               </ul>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
