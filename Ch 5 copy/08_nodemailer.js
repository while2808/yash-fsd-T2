var nm = require("nodemailer");
var trans = nm.createTransport({
    host : "smtp.gmail.com",
    port : 465,
    auth :{
        users:"sender@gmail.com",
        pass:"App Password"
    }
})

var mailoption = {
    from : "sender@gmail.com",
    to:"receiver@gmail.com",
    subject:"Hello",
    text:"Test Mail",
    html:"<h1>Effect of h1</h1>"
}
trans.sendMail(mailoption,(err,info)=>{
    if(err){
        console.log(err);
    }
    console.log(info);
})

// for remember
// transport create...
// configure mailoption...
// deliever message with sendmail()