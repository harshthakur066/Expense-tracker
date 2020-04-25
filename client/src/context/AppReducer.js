export default (state, action) => {
  switch (action.type) {
    case "add_transaction":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "delete_transaction":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
