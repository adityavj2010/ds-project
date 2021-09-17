const express = require("express");
const { readData, writeData } = require("./database.js");
const router = express.Router();

router.get("/", function (req, res) {
  readData().then((data) => {
    res.send({ message: data });
  });
});

router.post("/", function (req, res) {
  console.log("req.body", req.body);
  writeData(req.body.message).then(() => {
    res.send({ message: req.body.message });
  });
});

module.exports = router;
