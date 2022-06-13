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
        <Card key={repo.id} cardNumber={repo.id} />
      ))}
    </div>
  );
};

export default List;
