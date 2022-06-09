const express = require("express");
require("dotenv").config();
require("./api/data/db");


const app = express();

const routes = require("./api/routes")

// app.use(function(req, res, next){
//     console.log(req.method, req.url);
//     next();
// });
app.use(express.urlencoded({extended:true}));
app.use("/api",routes);

const server =app.listen(process.env.PORT, function(){
    console.log(process.env.MSG_SERVER_STARTING,server.address().port);
});
