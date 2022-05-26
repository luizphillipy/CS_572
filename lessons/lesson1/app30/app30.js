
const express=require("express");
const { path } = require("express/lib/application");
const res = require("express/lib/response");
require("dotenv").config();
const app=express();
const jsonController = require("./controller")





//middleware non-terminated 
app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});

//middleware terminated
app.use("/api",routes);

app.use(express.static(path.join(__dirname,"public")));

app.get("/",function(){
    console.log("Get received");
    res.status(200).send("Received Get Response")
});

app.get("/json",function(req,res){
    console.log("JSON Request received");
    res.status(200).json({"JSON Data": "True"});
});

app.get("/file",function(req,res){
    console.log("File requisition received");
    res.status(200).sendFile(path.join(__dirname,"app23.js"));
});

const server = app.listen(process.env.PORT, function(){
    console.log("app17 started on port "+server.address().port);
});
