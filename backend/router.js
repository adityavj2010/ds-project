const express = require("express");
const { readData, writeData } = require("./database.js");
const router = express.Router();

//The get call for getting the message
router.get("/", function (req, res) {
  readData().then((data) => {
    res.send({ message: data });
  });
});

//The post call for writing the message
router.post("/", function (req, res) {
  writeData(req.body.message).then(() => {
    res.send({ message: req.body.message });
  });
});

module.exports = router;
