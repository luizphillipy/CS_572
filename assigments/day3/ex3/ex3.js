//create express dependency
const express = require("express");
//set envirolment variables to be used in .env file
require("dotenv").config();
//create app in express
const app = express();
//require use of path to let the app run in different OS
const path = require("path");
//use of routes in separation of concerns
const routes = require("./api/routes");
//getting information about port from .env file
port = process.env.PORT;
//initiallizing server on port port and send a message to the console 
const server = app.listen(port,function(){
    console.log(process.env.MSG_SERVER_STARTING,port);
});
//initiallizing monitoring of method and url on the console
app.use(function(req,res,next){
    console.log(req.method, req.url);
    next();
});
app.use("/operation",routes);



