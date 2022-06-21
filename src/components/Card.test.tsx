import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import dummyData from "../utils/dummyReposData";

const repo = dummyData(1)[0];

test("renders Card with correct prop", () => {
  render(
    <Card
      githubId={repo.githubId}
      name={repo.name}
      stars={repo.stars}
      url={repo.url}
      language={repo.language}
      description={repo.description}
      index={repo.index}
      created_at={repo.created_at}
    />
  );
  const cardElement = screen.getByText(`1- Repo 1`);
  expect(cardElement).toBeInTheDocument();
});
