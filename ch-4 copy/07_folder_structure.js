const express = require("express");
const app = express();
app.use(express.static("frontend"));
app.listen(4321);

// scenario 3
// var path = require(path)
// app.use(express.static(path.join(__dirname,"../")))