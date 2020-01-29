// const app = require('express')()

const express = require("express");
const app = express();

app.use(express.static("public"));

// app.get("/style.css", (request, response) => {
//   response.sendFile(__dirname + "/public/style.css");
// });

app.get("/", (request, response) => {
  console.log("GET request made to /");
  // response.send("<h1>Hello World! in express</h1>");

  response.sendFile(__dirname + "/homepage.html"); // __dirname is a global variable available in node.js
});

app.get("/foo", (request, response) => {
  console.log("GET request made to /foo");
  response.send("This is the foo page");
});

app.listen(3000, () => {
  console.log("Server listening on port: 3000");
});
