const express = require("express");
const authRoutes = require("./routes/auth_route");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authRoutes);

app.listen(8000, () => {
  console.log("server is running");
});
