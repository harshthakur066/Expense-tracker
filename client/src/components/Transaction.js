import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { text, amount, _id } = transaction;
  const sign = amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <li className={amount < 0 ? "minus" : "plus"}>
        {text}
        <span>
          {sign}Rs.{Math.abs(amount)}
        </span>
        <button className="delete-btn" onClick={() => deleteTransaction(_id)}>
          x
        </button>
      </li>
    </div>
  );
};
