const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const config = require("./data/config.json");
const exp = require('constants');

const app = express();
// Support posting form data with URL encoded.
app.use(express.urlencoded({ extended: true }));
//starting index
app.get("/", async (req, res) => {
  console.log(req.body);
  res.send("Hello!")
});

app.post("/polling-topic", async (req, res) => {

})

app.listen(config.port, () => {
  console.log(`App running at ${config.port}`);
});