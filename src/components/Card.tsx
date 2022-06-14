import React, { useState } from "react";
import { Repo } from "../interfaces";
import { setLocalData, getLocalData } from "../utils/localStore";

export const Card = ({
  githubId,
  name,
  stars,
  url,
  description,
  language,
  index,
}: Repo) => {
  const isCrrentRepoFavorite =
    getLocalData("gitStars").findIndex(
      (star) => star["githubId"] === githubId
    ) !== -1;
  const [isFavourited, setIsFavourited] = useState(isCrrentRepoFavorite);

  const onClick = () => {
    console.log(name);
    setIsFavourited(!isFavourited);
    setLocalData("gitStars", {
      githubId,
      name,
      stars,
      url,
      description,
      language,
      index,
    });
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
