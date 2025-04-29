//create html file which form with name,lname,password and submit button omnce submitted,store all these entered values,to/next page.then redirect to/admin page & clean cookie for last name display remaining cookie on this page using post.

var express = require("express");
var app = express();
var p = require("path");
var cp = require("cookie-parser");
app.use(cp())
app.use(express.static("frontend", { index: "14_task_06.html" }))
app.use(express.urlencoded({ extended: false }));

app.post("/next", function(req, res) {
    res.cookie("name", req.body.n1);
    res.cookie("lname", req.body.ln);
    res.cookie("password", req.body.pw);
    res.redirect("/admin");
});
app.get("/admin", function(req, res) {
    res.clearCookie("lname");
    res.write("name : " + req.cookies.name + "\n");
    res.write("lname : " + req.cookies.lname + "\n");
    res.write("password : " + req.cookies.password + "\n");
    res.send()
});
app.listen(8000);