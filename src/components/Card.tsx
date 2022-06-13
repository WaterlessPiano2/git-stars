import React from "react";

type Props = {
  cardNumber: number;
};

export const Card = ({ cardNumber }: Props) => {
  return (
    <div className="cardContainer">
      <h1>This is the Card {cardNumber}</h1>
    </div>
  );
};

export default Card;
