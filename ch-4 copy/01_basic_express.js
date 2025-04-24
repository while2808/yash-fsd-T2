var express = require("express");
const app = express();
app.get("/", function(req, res) {
    res.set("content-type", "text/plain");
    res.send("Hello")
});
app.listen(3241);

//when we will write method and then write a send method give error.