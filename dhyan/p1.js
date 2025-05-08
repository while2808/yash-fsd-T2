var express=require("express")
var app=express()
app.set("view engine","pug")
app.get("/",(req,res)=>{
    res.render(__dirname+"/p1");
})
app.listen(6969)