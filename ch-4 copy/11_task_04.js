// html =>postmethod,username,password,submit,nextpage./login if username=="admin"then welcome admin" else "please login with admin name"

var express = require("express");
var url = require("url");
var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("frontend", {
    index: "11_task_04.html"
}));
app.post("/login", function(req, res) {
    if (req.body.uname == "admin") {
        res.write("Welcome Admin")
    } else {
        res.write("Please Login With Admin Name.")
    }
    res.send();
})
app.listen(4321);