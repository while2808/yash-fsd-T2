const express=require("express")
const app=express()
app.set("view engine","pug")
app.get("/",(req,res)=>{
    res.render(__dirname+"/p3",{message:"Hello",name:"Dhyan",id:"5"})
})
app.listen(6969)