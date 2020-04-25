import React, { createContext, useReducer } from "react";
import axios from "axios";

import AppReducer from "./AppReducer";

//  Initial State
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvideer = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  const getTransactions = async () => {
    try {
      const res = await axios.get("/api/v1/transactions");

      dispatch({
        type: "get_transactions",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "transaction_error",
        payload: error.response.daa.error,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);

      dispatch({
        type: "delete_transaction",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "transaction_error",
        payload: error.response.data.error,
      });
    }
  };

  const addTransaction = async (transaction) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const res = await axios.post("api/v1/transactions", transaction, config);

      dispatch({
        type: "add_transaction",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "transaction_error",
        payload: error.response.daa.error,
      });
    }
  };

  const { transactions, error, loading } = state;

  return (
    <GlobalContext.Provider
      value={{
        transactions,
        error,
        loading,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
