const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();

const app = express();

//defining a port
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Connection success!");
});

const userRouter = require("./routes/userRouter");
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
