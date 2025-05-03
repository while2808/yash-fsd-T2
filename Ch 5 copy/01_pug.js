var express = require("express");
var app = express();
app.set("view engine", "pug");
// app.use(express.static("frontend", { index: "01_pug_IMP_5M.pug" }))
app.get("/", (req, res) => {
    res.render(__dirname + "/01_pug_IMP_5M")
});
app.listen(4321);