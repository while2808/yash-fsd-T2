const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.set("content-type","text/html")
    res.send("<h1>hello</h1>")
});
app.get("/about",(req,res)=>{
    res.set("content-type","text/plain");
    res.write("Hello")
    res.send()
    //res.write("Hii")

});
app.listen(8050);
