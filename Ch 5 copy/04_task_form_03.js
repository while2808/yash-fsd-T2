// middleware,cookies,session,multer,pug for exam pointof view.
var express = require("express");
var app = express();
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: "false" }))
app.get("/", (req, res) => {
    res.render(__dirname + "/04_task_03")
})

app.post("/data", (req, res) => {
    res.render(__dirname + "/04_task_03_output", {
        dname: req.body.dname,
        email: req.body.email,
        course: req.body.course
    })
})
app.listen(4321);