const express = require("express");
var router = express.Router();
const data  = [
    {id:1,name:"Yash",branch:"IT",city:"Abad"},
    {id:2,name:"Romil",branch:"CST",city:"Abad"},
    {id:3,name:"Rudra",branch:"AI",city:"Abad"},
    {id:4,name:"Harnish",branch:"ML",city:"Abad"}
]

router.get("/",(req,res)=>{
    res.set("content-type","text/html");
    for(i of data){
        res.write("<h3> Name : " + i.name + " " + "Branch : " + i.branch + "</h3>")
    }
    res.send();
});
// /:branch =>value fetch kare.
router.get("/:branch",(req,res)=>{
    var current_data = data.filter((b)=>b.branch==req.params.branch)
    if(current_data.length>=1){
        res.send(current_data)
    }
    else{
        res.send("not found");
    }
})

module.exports = router;