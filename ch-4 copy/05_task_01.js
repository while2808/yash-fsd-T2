const express = require("express");
const app = express();
student = { name: "LJU", age: 25 };
app.get("/", (req, res) => {
    res.write(student.age);
    res.send();
});
app.get("/send", (req, res) => {
    res.send(student.age); //
});
app.get("/json", (req, res) => {
    res.json(student.age); //25
});
app.listen(6321);