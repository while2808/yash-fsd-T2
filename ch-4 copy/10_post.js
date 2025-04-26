// Post Method
// app.use(express.urlencoded())

var express = require("express");
var url = require("url");
var app = express();
// app.use(express.urlencoded()); // body parser error.
app.use(express.urlencoded({ extended: false })); // Remove body parser error.
app.use(express.static("frontend", {
    index: "10_post.html"
}));
app.post("/process", function(req, res) {
    res.send(req.body.fname);
})
app.listen(4321);