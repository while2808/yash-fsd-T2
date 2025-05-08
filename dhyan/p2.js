var expr = require("express");
var app = expr();
app.set("view engine","pug");
var p = require("path");

app.get("/",(req,res)=>{
res.render(__dirname+"/p2");
});
app.get("/data",(req,res)=>{
res.set("content-type","text/html")
res.write("<h2>Welcome " + req.query.name + "</h2>");
res.write("<h3>Your Email Id is : " + req.query.email + "</h3>");
res.send();
});
app.listen(6969);
