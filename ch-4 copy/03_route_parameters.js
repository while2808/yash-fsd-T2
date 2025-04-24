var express = require("express");
var app = express();
app.get("/calender/:day/event/:ename", (req, res) => {
    res.send(req.params);
});
app.listen(7321); //ans is given of json object.