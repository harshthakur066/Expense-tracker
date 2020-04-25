import React from "react";

export const Transaction = ({ transacion }) => {
  const { text, amount } = transacion;
  const sign = amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={amount < 0 ? "minus" : "plus"}>
        {text}
        <span>
          {sign}Rs.{Math.abs(amount)}
        </span>
        <button className="delete-btn">x</button>
      </li>
    </div>
  );
};
