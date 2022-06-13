import React from "react";
import Card from "./Card";
import { Repo } from "../interfaces";

type Props = {
  repos: Repo[];
};

export const List = ({ repos }: Props) => {
  return (
    <div className="cardContainer">
      {repos.map((repo) => (
        <Card key={repo.id} id={repo.id} name={repo.name} stars={repo.stars} url={repo.url} />
      ))}
    </div>
  );
};

export default List;
