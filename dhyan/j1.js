var http=require("http")
http.createServer(function(req,res){
    res.writeHead("200","content-type:text/html");
    res.write("Hello")
    res.end()
}).listen(4321);