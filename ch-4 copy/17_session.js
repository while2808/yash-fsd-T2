var express = require("express")
var app = express();
var es = require("express-session");
app.use(es({
    resave: false,
    SaveUnitialized: false,
    secret: "ljk123"
}))
app.use(express.static("frontend", { index: "17_session.html" }))
app.get("/savesession", (req, res) => {
    req.session.n1 = req.query.n1;
    req.session.pw = req.query.pw;
    res.redirect("fetchsession");
})
app.get("/fetchsession", (req, res) => {
    res.set("content-type", "text/html");
    res.write(`<a href="/deletesession">Logout</a>`)
    res.send();
})
app.get("/deletesession", (req, res) => {
    req.session.destroy()
    res.write("<a href='/'>Logout</a>")
    res.send();
})
app.listen(4321);