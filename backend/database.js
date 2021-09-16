const fs = require("fs");
const filePath = `${__dirname}/data.txt`;
const ENCODING = "utf8";
function readData() {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, ENCODING, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

function writeData(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, ENCODING, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

module.exports = { writeData, readData };
