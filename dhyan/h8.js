var express=require("express");
var app=express();
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname,{"index":"h8.html"}));
app.post("/process",(req,res)=>{
    res.send(req.body.fname)
})
app.listen(4321);
