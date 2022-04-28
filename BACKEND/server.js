const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

//defining a port
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
