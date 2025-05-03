var express = require("express");
var app = express();
app.set("view engine", "pug")
app.get("/", function(req, res) {
    res.render(__dirname + "/02_task_01")
})
app.get("/data", function(req, res) {
    res.set("content-type", "text/html");
    var n = req.query.fname;
    var e = req.query.email;
    res.send("Name : " + n + "<br>Email : " + e)
})
app.listen(8080);