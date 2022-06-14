import React, { useState } from "react";
import { Repo } from "../interfaces";

export const Card = ({
  githubId,
  name,
  stars,
  url,
  description,
  language,
  index,
}: Repo) => {
  const [isFavourited, setIsFavourited] = useState(false);
  const onClick = () => {
    console.log(name);
    setIsFavourited(!isFavourited);
  };

  return (
    <div className="card">
      <p className="link10">
        <a href={url}>
          {index}- {name}
        </a>
      </p>
      <p>{description}</p>{" "}
      {language && (
        <p className="code">
          Language: <span>{language}</span>
        </p>
      )}
      <p className="stars">
        Stars: {stars}{" "}
        <button onClick={() => onClick()}>{isFavourited ? "⭐" : "✰"}</button>
      </p>
    </div>
  );
};

export default Card;
