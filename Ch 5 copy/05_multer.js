var express = require("express");
const multer = require("multer");
const app = express();
app.use(express.static(__dirname, { index: "05_multer.html" }));
var store = multer.diskStorage({
    destination: "xyz",
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: store })
app.post("/uploadfile", upload.single("mypic"), (req, res) => {
    const file = req.file;
    if (file) {
        res.send("<h2>File : " + file.originalname + "</h2> has been uploaded in " + file.destination + " folder");
    }
})
app.listen(5000);