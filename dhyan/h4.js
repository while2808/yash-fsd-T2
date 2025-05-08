const express=require("express");
const app=express()
student=[{name:"Dhyan",age:21},{name:"Meet",age:85},{name:"Thala",age:99},{name:"Virat",age:22},{name:"nandej",age:35}]
app.get("/",(req,res)=>{
    res.set("content-type","text/html")
    res.send(student)
})
app.get("/sort",(req,res)=>{
 
    res.set("content-type","text/html")
    var st=student.sort((a,b)=>b.age-a.age);
    res.send(st)

})
app.listen(8222);
