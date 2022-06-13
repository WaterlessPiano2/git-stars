import React from "react";
import { Repo } from "../interfaces";

export const Card = ({ id, name, stars, url }: Repo) => {
  return (
    <a className="card" href={url}>
      <h2 className="App-link">{name}</h2> <p>Stars: {stars}</p>
    </a>
  );
};

export default Card;
