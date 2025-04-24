// sort age code

student = [{ name: "LJU", age: 18 }, { name: "yash", age: 25 }, { name: "harnish", age: 8 }];
const express = require("express");
const app = express();
app.get("/", function(req, res) {
    res.set("content-type", "text/html");
    res.send(student);
})
app.get("/sort", function(req, res) {
    res.set("content-type", "text/html");
    var des = student.sort((a, b) => b.age - a.age)
    res.send(des)
});
app.listen(4321)