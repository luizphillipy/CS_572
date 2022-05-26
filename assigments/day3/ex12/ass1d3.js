//require framework express
const express = require("express");
//create an express application 
const app=express();
//set using of .env file to put envirioment variables.
require("dotenv").config();
//requisition of path to let the application run in any operation system
const path = require("path");

const routes=require("./api/routes")

//getting the port from .env file and. using it on the program
port= process.env.PORT;
const server = app.listen(port,function(){
    console.log(process.env.MSG_SERVER_STARTING+port);
});

app.use(function(req,res,next){
    console.log(req.method, req.url);
    next();
});
app.use(express.static(path.join(__dirname,process.env.PUBLIC_FOLDER)));
app.use("/api", routes);
