// Write js script to pass data like message,name,id form express to pug in h1,h2,h3 tags.

const express = require("express");
var app = express();
app.set("view engine", "pug");
app.get("/", (req, res) => {
    res.render(__dirname + "/03_task_02", {
        message: "Hello",
        name: "Yash",
        id: "2 "
    });
})
app.listen(4322)