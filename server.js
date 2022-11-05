const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();
const bodyparser = require("body-parser");
const path = require("path");

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan("tiny"));

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views/ejs"));

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));

app.get("/", (req, res) => {
  //dont have to add extension bacause view engine sets it that all are .ejs
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
