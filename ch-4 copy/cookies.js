var express = require("express")
var app = express()
var cp = require("cookie-parser")
app.use(cp())
app.get("/", (req, res) => {
    res.cookie("name", "express")
    res.cookie("fname", "JS")
    res.cookie("ID", "2")
    res.cookie("email", "kawan@gmail.com", { maxAge: 2000 })
    res.clearCookie("name")
    const cookies = req.cookies;
    res.send(cookies)
})
app.listen(1111)