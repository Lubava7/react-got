import React from "react";
import "./CharacterApi.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import questionmark from "../../images/questionmark.png";

function CharacterApi() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://anapioficeandfire.com/api/characters?pageSize=100")
      .then((res) => res.json())
      .then((value) => {
        setItems(value);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div className="body">
      <div className="ulli">
        {items.map((item, index) => (
          <Link className="photo-name" to={`/items/${index + 1}`}>
            <img className="png-items-page" src={questionmark} alt="?" />
            <li className="aliases">
              {item.aliases}
              {item.name}
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CharacterApi;

/* <li className="born">{item.born}</li>
                <li className="culture">{item.culture}</li>
                <li className="died">{item.died}</li>
                <li className="father">{item.father}</li>
                <li className="gender">{item.gender}</li>
                <li className="mother">{item.mother}</li>
                <li className="playedBy">{item.playedBy}</li>
                <li className="povBooks">{item.povBooks}</li>
                <li className="spouse">{item.spouse}</li>
                <li className="titles">{item.titles}</li>
                <li className="url">{item.url}</li> */

/* <img
  className="image"
  src="https://trikky.ru/wp-content/blogs.dir/1/files/2014/06/5034de27566479ab3669ce97448d883d.jpg"
  border="0"
></img>; */
