import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../../components/Main/Main";

export default function AllCharacter() {
  const { index } = useParams();
  const { value } = useState(null);

  useEffect(() => {
    fetch("https://anapioficeandfire.com/api/characters?pageSize=10")
      .then((res) => res.json())
      .then((value) => {
        this.setState({ value });
      });
  }, [index]);
  return <div>{value.index}</div>;
}
