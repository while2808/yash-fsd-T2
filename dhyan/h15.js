const express=require("express")
var app=express()
var es=require("express-session")
app.use(es({
    resave:false,
    saveUninitialized:false,
    secret:"LJK123"
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname,{index:"h15.html"}))
app.get("/Login",(req,res)=>{
    req.session.username=req.query.username
    req.session.password=req.query.password
    res.redirect("/fetchsession")
})
app.get("/fetchsession",(req,res)=>{
    res.set("content-type","text/html")
    res.write("<a href='/deletesession'>Logout<a>")
    res.send()
})
app.get("/deletesession",(req,res)=>{
    res.set("content-type","text/html")
    res.write("<a href='/'>Logout<a>")
    res.send()
    req.session.destroy()
})

app.listen(6969)
