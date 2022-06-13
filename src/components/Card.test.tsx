import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import dummyData from "../utils/dummyReposData";

const repo = dummyData(1)[0];

test("renders Card with correct prop", () => {
  render(
    <Card id={repo.id} name={repo.name} stars={repo.stars} url={repo.url} />
  );
  const cardElement = screen.getByText(`Repo 1`);
  expect(cardElement).toBeInTheDocument();
});
