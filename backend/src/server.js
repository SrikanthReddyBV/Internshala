const express = require("express");

const path = require("path"); //core module (come inbuilt with node.js) no need to install

const connection = require("./configs/db");

const app = express();

app.use(express.json());
//joining server.js file with views directory

// views is something which we show to users
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.listen("2345", async () => {
  await connection();
  console.log("Listening on port 2345");
});
