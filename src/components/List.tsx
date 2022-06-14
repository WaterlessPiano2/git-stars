import React from "react";
import Card from "./Card";
import { Repo } from "../interfaces";

type Props = {
  repos: Repo[];
};

export const List = ({ repos }: Props) => {
  return (
    <div className="listContainer">
      {repos.map((repo, index) => (
        <Card
          key={index}
          index={index + 1}
          githubId={repo.githubId}
          name={repo.name}
          stars={repo.stars}
          url={repo.url}
          description={repo.description}
          language={repo.language}
        />
      ))}
    </div>
  );
};

export default List;
