const express = require("express");
const myApp = express();
const movies = require("./movies");

myApp.set("view engine", "hbs");

// myApp.set("views", __dirname + "/views");

myApp.use(express.static("public"));

myApp.get("/", (request, response) => {
  // "views/index.hbs"
  response.render("index", {
    name: "John Doe",
    randomNumber: Math.random(),
    someHTML: "<span>This is a span</span>",
    // shoppingList: []
    shoppingList: ["mate", "vodka", "milk"]
  }); // res.render(<template file path>)
  // the view engine generates an html file out of the .hbs template
  // express sends that file
});

myApp.get("/movies", (request, response) => {
  // console.log(movies);
  response.render("moviePage", { moviesList: movies, layout: false });
});

myApp.listen(3000, () => {
  console.log("Server listening on port 3000...");
});
