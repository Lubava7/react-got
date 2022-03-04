import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Singlepage() {
  const { aliases } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://anapioficeandfire.com/api/characters/${aliases}`)
      .then((res) => res.json())
      .then((value) => setItem(value));
  }, [aliases]);

  return (
    <div>
      hhfhfhfhfh
      {item && (
        <div>
          <h1>{item.aliases}</h1>
          <p>{item.gender}</p>
          <Link to={`/items`}>back link</Link>
        </div>
      )}
    </div>
  );
}
export default Singlepage;
