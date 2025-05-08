const express=require("express")
const multer=require("multer")
const app=express();
app.use(express.static(__dirname,{index: 'm2.html'}));
var store=multer.diskStorage({
    destination:"xyz",
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})

var upload =multer({storage:store})
app.post("/uploadfile",upload.array("mypic",5),(req,res)=>{
    const files=req.files
    if(files){
        res.set("content-type","text/html")
        for(i of files)
             res.write("<w>File:- "+JSON.stringify(i.originalname)+"</h2>has been uploaded in  folder")
    }
    res.send()
})
app.listen(1234)
