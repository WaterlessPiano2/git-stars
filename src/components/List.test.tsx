import { render, screen } from "@testing-library/react";
import List from "./List";
import dummyData from "../utils/dummyReposData";

test("renders List with correct prop", () => {
  render(<List repos={dummyData(3)} />);
  const firstCardElement = screen.getByText(`This is the Card 1`);
  expect(firstCardElement).toBeInTheDocument();

  const lastCardElement = screen.getByText(`This is the Card 3`);
  expect(lastCardElement).toBeInTheDocument();
});
