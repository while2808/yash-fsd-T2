const express=require("express")
var app=express()
app.use(express.static("frontend"));

app.listen(4321);