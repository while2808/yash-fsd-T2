// when we are select one operation add,sub,div,mul on html file to server.
var express = require("express");
var url = require("url");
var app = express();
app.use(express.static("frontend", {
    index: "09_task_03.html"
}));
app.get("/calculator", function(req, res) {
    // res.set("content-type", "text/html")
    var n1 = parseInt(req.query.no1);
    var n2 = parseInt(req.query.no2);
    var re = 0;
    var c = ""
    var con = req.query.condition;
    if (con == "add") {
        re = n1 + n2
        c = "+"
    } else if (con == "sub") {
        re = n1 - n2
        c = "-"
    } else if (con == "mul") {
        re = n1 * n2
        c = "*"
    } else if (con == "div") {
        re = n1 / n2
        c = "/"
    }
    res.send(n1 + c + n2 + "=" + re);
});
app.listen(5521)