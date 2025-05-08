const express=require("express")
const multer=require("multer")
const app=express();
app.use(express.static(__dirname,{index: 'm1.html'}));
var store=multer.diskStorage({
    destination:"xyz",
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})

var upload =multer({storage:store})
app.post("/uploadfile",upload.single("mypic"),(req,res)=>{
    const file=req.file
    if(file){
        res.send("<w>File:- "+file.originalname+"</h2>has been uploaded in "+file.destination+" folder")
    }
})
app.listen(4321)