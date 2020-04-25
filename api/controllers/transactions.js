exports.getTransactions = (req, res, next) => {
  res.send("GET transactions");
};

exports.addTransaction = (req, res, next) => {
  res.send("Post transaction");
};

exports.deleteTransaction = (req, res, next) => {
  res.send("Delete transaction");
};
