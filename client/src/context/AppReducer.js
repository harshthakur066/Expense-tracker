export default (state, action) => {
  switch (action.type) {
    case "get_transactions":
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case "add_transaction":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "delete_transaction":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case "transaction_error":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
