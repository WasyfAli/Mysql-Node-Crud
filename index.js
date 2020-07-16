const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const DataBaseConnection = require("./database");
const Config = require("./config/keys");

//Security holding package {http}
const server = require("http").createServer(app);

app.get("/", (req, res) => {
  res.json({
    message: "Success",
  });
});

app.listen(Config.serverPort, () => {
  `Server is running at port ${Config.serverPort}`;
});

app.set("port", process.env.PORT || Config.serverPort || 4300);
server.listen(app.get("port"), () => {
  console.log(
    `server on port ${app.get("port")} and Database name ${
      Config.database.database
    }`
  );
});
