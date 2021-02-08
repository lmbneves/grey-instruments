const express = require("express");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.engine("hbs", handlebars({
  layoutsDir: __dirname + "/views/layouts",
  extname: "hbs",
  defaultLayout: "index",
  partialsDir: __dirname + "views/layouts"
}));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main");
});

app.listen(port, () => console.log("App listening on port " + port));