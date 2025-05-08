const express=require("express")
const cp=require("cookie-parser")
const app=express()
app.use(cp())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname,{index:"h14.html"}))

app.post("/submit-feedback",(req,res)=>{
    res.set("content-type", "text/html");
    const {name,email,message,rating}=req.body

    const feedback={name,email,message,rating}

    res.cookie("feedback",feedback,{maxAge:10000})
    res.send("<a href='/showfeedback'>Show Feedback</a>")
  


})

app.get("/showfeedback",(req,res)=>{
    res.set("content-type", "text/html");
    let feedback = req.cookies.feedback
    if(feedback){
        res.send("Name:- "+feedback.name+"<br>"+"Email:- "+feedback.email+"<br>"+"Message:- "+feedback.message+"<br>"+"Rating:- "+feedback.rating+"<BR><a href='/'>lOGOUT</a>")

    }
   
})
app.listen(6868)
