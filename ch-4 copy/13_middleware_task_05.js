var express = require("express");
var app = express();
var p = require("path")
app.use(express.static("frontend", { index: "13_task_05.html" }))
app.use(express.urlencoded({ extended: false }));
app.post("/mid", (req, res, next) => {
    res.set("content-type", "text/html")
    res.write("<h3>Welcome</h3>" + req.body.n1 + "<br>")
    res.write("<h3>Mail is </h3>" + req.body.mail + "<br>")
    next();
}, (req, res) => {
    if (req.body.check == "on") {
        res.write("<h4>Thank You For Subscribing</h4><br>");
        res.write("<a href='/'>Logout</a>")

    } else {
        res.write("<h4>You Can Subscribe </h4><br>");
        res.write("<a href='/sub'>subscribe</a>")
    }
    res.send();
})
app.get("/sub", (req, res) => {
    res.set("content-type", "text/html");
    res.write("Thank You For subscription<br>")
    res.write("<a href='/'>Logout</a>");
    res.send();
})
app.listen(8000)