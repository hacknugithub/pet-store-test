const path = require("path");
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const sequelizeConn = require("./db/index");

sequelizeConn();

const petRoutes = require("./routes/pets");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV == "develop") {
  app.use(morgan("dev"));
}

app.use("/api/v1/pets/", petRoutes);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} in port ${PORT}`.yellow.bold
  )
);

module.exports = server;
