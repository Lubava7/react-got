import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
function Singlepage() {
  const { aliases } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://anapioficeandfire.com/api/characters/${aliases}`)
      .then((res) => res.json())
      .then((value) => {
        setItem(value);
        setIsLoading(false);
      });
  }, [aliases]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div>
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
