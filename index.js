const { app, startServer } = require("./app/config.js");
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "model");

fs.readdirSync(dir).forEach((file) => {
  const route = require(path.join(dir, file));
  app.use(route);
});

startServer();
