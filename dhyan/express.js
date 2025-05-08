var express=require("express");
const app=express();
app.get("/",function(req,res){
    res.set("content-type:text/html")
    res.send("Hello Meet")
})
app.listen(3241)

