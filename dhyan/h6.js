var express=require("express")
var app=express()
app.use(express.static(__dirname,{"index":"h6.html"}))
app.get("/process",(req,res)=>{
    var fname=req.query.fname;
    var lname=req.query.lname;
    res.send(fname + " "+lname)

})
app.listen(7000)

