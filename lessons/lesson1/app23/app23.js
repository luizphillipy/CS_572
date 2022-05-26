
const express=require("express");
const path = require("path");
require("dotenv").config();
const app=express();
const routes = require("./routes");





//middleware non-terminated 
app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});

//middleware terminated
app.use("/api",routes);


//middleware terminated
app.use(express.static(path.join(__dirname,"public")));



const server = app.listen(process.env.PORT, function(){
    console.log("app17 started on port "+server.address().port);
});
