const express=require("express");
const app=express()
student={name:"LJU",age:28}
app.get("/",(req,res)=>{
    res.write(student.age+ " ")
    res.send()
})
app.get("/j",(req,res)=>{
    res.send(student.age+ " ")
})
app.get("/j2",(req,res)=>{
    res.json(student.age)
})
app.listen(8008);
