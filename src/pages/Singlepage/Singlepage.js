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
      {item && (
        <>
          <h1>{item.aliases}</h1>
          <p>{item.url}</p>
          <Link to={`/`}>back link</Link>
        </>
      )}
    </div>
  );
}
export default Singlepage;
