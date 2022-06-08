import React, { useState, useEffect } from "react";
import Card from "./card/card";

const JuiceCards = () => {
  const [juice, setJuice] = useState([]);
  useEffect(() => {
    const API_URL = "https://629e71fe3dda090f3c19d701.mockapi.io/v1/meals";
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setJuice(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      {juice.map((element) => {
        return (
          <Card key={element.id} imgUrl={element.image} title={element.name} />
        );
      })}
    </div>
  );
};

export default JuiceCards;
