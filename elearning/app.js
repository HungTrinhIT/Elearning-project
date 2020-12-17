const express = require("express");
const app = express();
const PORT = 3000;
var exphbs = require("express-handlebars");
app.use(express.static(__dirname + "/public"));

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main.hbs",
    extname: ".hbs",
    partialsDir: "views/_partials",
    layoutsDir: "views/_layouts",
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

app.use("/admin/categories", require("./routes/category.route"));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
