var express = require("express");
var app = express();
var p = require("path");
app.use(express.static(__dirname, { index: 'h11.html' }));
app.use(express.urlencoded());
app.post("/login", (req, res, next) => {
    res.set("content-type", "text/html");
    res.write("<center><h1>Welcome " + req.body.name + "</h1>");
    res.write("<center><h2>Your email id is " + req.body.email + "</h2>");
    next();
},(req, res) => {
    if (req.body.checkbox == "on") {
        res.write("<h3>Thank you for your subscription</h3><a href='/'>Logout</a>");
    } else {
        res.write("<h3>You can subscribe to get daily updates</h3><a href = '/subscribe' > Subscribe</a ></center >");
}
    res.send();
});
app.get("/subscribe", (req, res) => {
    res.set("content-type", "text/html");
    res.write("<h3>Thank you for your subscription</h3></center><a href='/'>Logout</a>");
    res.send();
});
app.listen(5002);