var express = require("express")
var app = express()
app.use("/xyz", (req, res, next) => {
    res.set("content-tye", "text/html")
    console.log(new Date())
    next();
}, (req, res) => {
    res.set("content-tye", "text/html");
    res.write("<h1>Hello</h1></br>");
    res.write("<h1>Welcome</h1>");
    res.end()
})
app.listen(1122)