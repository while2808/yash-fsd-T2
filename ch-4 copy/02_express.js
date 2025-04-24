const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.set("content-type", "text/plain");
    res.send("<h1>hello</h1>");
});
app.get("/about", (req, res) => {
    res.set("content-type", "text/plain");
    res.write("Hello");
    // res.send("<h1>hello</h1>"); it will gave error.because cannot write res.write() then res.send("Hello") 
    // res.send() should be empty.
    res.send();
    // res.write("Hi");
})
app.listen(7321);