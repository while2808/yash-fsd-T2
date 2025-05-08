{/* program to demonstrate middleware function */}
var express=require("express") 
var app=express()
 app.use("/xyz",(req,res,next)=>{
    console.log(new Date())
    next()
 },(req,res)=>{
    res.set("content-type","text/html")
    res.write("Hello"+"<br>"+"Welcome to LJU"+"<br>"+"Tutorial")
    res.send()
 })
app.listen(5000) 

