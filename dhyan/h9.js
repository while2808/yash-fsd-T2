var express=require("express");
var app=express();
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname,{"index":"h9.html"}));
app.post("/login",(req,res)=>{
    var user=req.body.uname
    if(user=="admin"){
        res.write("Welcome Admin")
    }else{
        res.write("Please Login Again")
    }
    res.send()
})
app.listen(6969);
