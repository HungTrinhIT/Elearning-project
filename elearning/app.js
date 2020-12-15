const express = require("express");
const app = express();
const PORT = 3000;
var exphbs = require("express-handlebars");
// To use static file in public folder
app.use(express.static(__dirname + "/public"));

//Declare application use handlebar view engine
app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main.hbs",
    extname: ".hbs",
    _partialsDir: "views/_partials",
    _layoutsDir: "views/_layouts",
  })
);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    layout: false,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
