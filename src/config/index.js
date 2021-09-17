let config = require("./config.json");

const env = process.env.NODE_ENV || "development";
if (env === "production") {
  config = require("./prod.json");
}

export const CONFIG = config;
