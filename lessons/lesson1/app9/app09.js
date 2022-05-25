const http = require("http");

const helloWorld = function(req, res){
    res.writeHead(200);
    res.end("<HTML><BODY><H1>HELLO WORLD</H1></BODY></HTML>")
}
const server =http.createServer(helloWorld);


server.listen(8081,"localhost", function(){
    console.log("THis is my http server on http://localhost:8080");
})
