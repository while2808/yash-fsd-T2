// write js script to upload file with size limit of 1MB.to "data" folder on server and in this folder file must be stored in format of "lju.pdf" where lju isthe feild name.

var express = require("express");
const multer = require("multer");
const app = express();
app.use(express.static(__dirname, { index: "07_task_limit_04.html" }));
var store = multer.diskStorage({
    destination: "data",
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "-" + "file.pdf")
    }
})
var upload = multer({ storage: store, limits: { fileSize: 1024 * 1024 } })
app.post("/uploadfile", upload.single("lju"), (req, res) => {
    const file = req.file;
    if (file) {
        res.send("<h2>File : " + file.originalname + "</h2>")
    }
})
app.listen(5004);