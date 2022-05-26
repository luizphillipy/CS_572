const express = require("express");
require("dotenv").config();
const path=require("path");
const app = express();
const routes = require("./api/routes");

port = process.env.PORT;

const server = app.listen(port, function(){
    console.log(process.env.MSG_SERVER_STARTING,port);
});

app.use(function(req,res,next){
    console.log(req.method, req.url);
    next();
});
app.use("/api", routes);
