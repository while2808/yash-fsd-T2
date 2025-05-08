var express=require("express")
var app=express()
app.use(express.static(__dirname,{"index":"h7.html"}))
app.get("/oper",(req,res)=>{
    var num1=req.query.n1;
    var num2=req.query.n2;
    var operator=req.query.formula;
    if(operator=="addition"){
        var o="+"
        var ans=num1+num2
    }else if(operator=="subtraction"){
        var o="-"
        var ans=num1-num2
    }else if(operator=="multi"){
        var o="*"
        var ans=num1*num2
    }else if(operator=="div"){
        var o="/"
        var ans=num1/num2
    }res.send(num1 + o +num2 +" = "+ ans)
})
app.listen(6968)