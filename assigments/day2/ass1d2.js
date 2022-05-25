const http=require("http");
const fs = require("fs");
require("dotenv").config();
require("path");


const serveAllRequests = function(req, res){
    
        switch(req.url){
            case "/index.html":
                serverIndex;
                break;
            case "/page1.html":
                servePage1();
                break;
            case "/page2.html":
                servePage2();
                break;
            default: serverIndex();         
    }
}

let indexBufferFile;
let page1BufferFile;
let page2BufferFile;
const servePage1 = function(req,res){
    res.setHeader("Content-Type","text/html");
    res.writeHead(200);
    res.end(page1BufferFile);
}
const servePage2 = function(req,res){
    res.setHeader("Content-Type","text/html");
    res.writeHead(200);
    res.end(page2BufferFile);
}
const serverIndex = function(req,res){
    res.setHeader("Content-Type","text/html");
    res.writeHead(200);
    res.end(indexBufferFile);
}

    fs.readFile(__dirname+"/public/index.html", function(err, buffer){
        indexBufferFile=buffer;
    });
    fs.readFile(__dirname+"/public/page1.html", function(err, buffer){
        page1BufferFile = buffer;
    });
    fs.readFile(__dirname+"/public/page2.html", function(err,buffer){
        page2BufferFile = buffer;
    
    });
    

const server = http.createServer(serveAllRequests);
server.listen(process.env.PORT,"localhost",function(){
    console.log("This server is running on port "+process.env.PORT);
})

