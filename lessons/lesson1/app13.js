const http = require("http");
const fs = require("fs");


const helloWorld = function(req, res){
    res.writeHead(200);
    res.end("<HTML><BODY><H1>HELLO WORLD</H1></BODY></HTML>")
}
const readIndexAndServe = function(req, res){
    fs.readFile(__dirname+"index.html"),function(err,buffer){

        res.setHeader("Content-type","text/html");

    }
}
const server =http.createServer(readIndexAndServe);


server.listen(8081,"localhost", function(){
    console.log("THis is my http server on http://localhost:8081");
})
