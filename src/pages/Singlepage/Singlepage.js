import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Singlepage() {
  const { index } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://anapioficeandfire.com/api/characters/${index}`)
      .then((res) => res.json())
      .then((value) => setItem(value));
  }, [index]);

  return (
    <div>
      hhfhfhfhfh
      {
        (item,
        index && (
          <div>
            <h1>{item.aliases}</h1>
            <p>{item.gender}</p>
            <Link to={`/items`}>back link</Link>
          </div>
        ))
      }
    </div>
  );
}
export default Singlepage;
