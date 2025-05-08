var express=require("express")
var app=express()
var cp=require("cookie-parser");
app.use(cp());
app.get("/",function(req,res){
    res.cookie("name","express");
    res.cookie("cname","js");
    res.cookie("ID","2")
    res.cookie("email","dhyanbhatt22@gmail.com",{maxAge:2000})
    res.clearCookie("name")
    const cookies=req.cookies
    res.send(cookies)
})

app.listen(6969)