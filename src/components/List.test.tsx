import { render, screen } from "@testing-library/react";
import List from "./List";
import dummyData from "../utils/dummyReposData";

test("renders List with correct prop", () => {
  render(<List repos={dummyData(3)} />);
  const firstCardElement = screen.getByText(`1- Repo 1`);
  expect(firstCardElement).toBeInTheDocument();

  const lastCardElement = screen.getByText(`3- Repo 3`);
  expect(lastCardElement).toBeInTheDocument();
});
