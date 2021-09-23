const fs = require("fs");
const filePath = `${__dirname}/data.txt`;
const ENCODING = "utf8";

/**
 * This function gets text from the data.xt file
 * @returns Returning the data from the text file
 */
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

/**
 * This function writes to the data.txt file
 */
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
