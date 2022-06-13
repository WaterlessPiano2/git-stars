import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

const props = { cardNumber: 1 };

test("renders Card with correct prop", () => {
  render(<Card cardNumber={1} />);
  const cardElement = screen.getByText(`This is the Card ${props.cardNumber}`);
  expect(cardElement).toBeInTheDocument();
});
