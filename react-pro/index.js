const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  const stream = fs.createReadStream("test.mp4");
  stream.on("data", (chunk) => {
    var ex = chunk.toString();
    res.send(ex);
  });
});

app.listen(8000);
