import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transacions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transacions.map((transacion) => (
          <Transaction key={transacion.id} transacion={transacion} />
        ))}
      </ul>
    </div>
  );
};
