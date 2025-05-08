const express=require("express")
const app=express()
app.use(express.urlencoded({ extended: true }));

app.set("view engine","pug")
app.get("/",(req,res)=>{
    res.render(__dirname+"/p4")
})
app.post("/data",(req,res)=>{
    res.render(__dirname+"/p4two",{dname:req.body.dname,email:req.body.email,course:req.body.course})
})
app.listen(4321)