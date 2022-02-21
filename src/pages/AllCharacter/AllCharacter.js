import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const AllCharacter = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://anapioficeandfire.com/api/characters?pageSize=10")
      .then((res) => res.json())
      .then((value) => setItems(value));
  }, []);
  return (
    <div>
      <p>All characetr</p>
      {items.map((item) => (
        <Link key={item.name} to={`/characters/${item.index}`}>
          <li>{item.aliases}</li>
        </Link>
      ))}
    </div>
  );
};
export default AllCharacter;
