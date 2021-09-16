const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./backend/router");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", router);
// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/build"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
