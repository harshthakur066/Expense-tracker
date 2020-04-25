const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const connectDB = require("./config/db");
const transactions = require("./routes/transactions");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(express.json());

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is runnig on port ${PORT}`));
