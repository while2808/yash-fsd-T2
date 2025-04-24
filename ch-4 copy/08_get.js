var express = require("express");
var url = require("url");
var app = express();
app.use(express.static(__dirname, {
    index: "08_get.html"
}));
app.get("/process", function(req, res) {
    var fname = req.query.fname;
    var lname = req.query.lname;
    res.send(fname + " " + lname);
});
app.listen(4322);