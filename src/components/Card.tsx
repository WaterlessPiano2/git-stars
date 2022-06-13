import React from "react";
import { Repo } from "../interfaces";

export const Card = ({
  githubId,
  name,
  stars,
  url,
  description,
  language,
}: Repo) => {
  return (
    <div className="card">
      <p className="link10">
        <a href="href={url}"> {name}</a>
      </p>
      <p>{description}</p>{" "}
      {language && (
        <p className="code">
          Language: <span>{language}</span>
        </p>
      )}
      <p className="stars">Stars: {stars}</p>
    </div>
  );
};

export default Card;
