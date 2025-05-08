var express=require("express")
var app=express()
var p=require("path")
var cp=require("cookie-parser");
app.use(express.static(__dirname,{index: 'h13.html'}));
app.use(express.urlencoded())
app.use(cp());
app.post("/next",function(req,res){
    res.cookie("fname",req.body.name);
    res.cookie("lname",req.body.lname);
    res.cookie("pass",req.body.password);
    res.redirect("/admin")
})
app.get("/admin",function(req,res){
    res.clearCookie("lname")
    res.write(" fname : " + req.cookies.fname+"\n");
    res.write(" Lname : " + req.cookies.lname+"\n");
     res.write(" Password : " + req.cookies.pass)+"\n";
     res.send()
})

app.listen(6969)                                                                                                  