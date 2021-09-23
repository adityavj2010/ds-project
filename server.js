const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./backend/router");
const cors = require("cors");
const app = express();

//enabling cors , needed for development environment
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Passing all apis containing 'api' to the router
app.use("/api", router);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/build"));

//Redirecting all remaining paths unmatching '/api' to front-end html code
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
  console.log("APP STARTED AT ", process.env.PORT || 8080);
});
