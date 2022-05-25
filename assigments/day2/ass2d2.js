const express=require("express");
require("dotenv").config();
const path=require("path");

const app = express();

app.get("/index.html",function(req,res){
    console.log("User requested index.html");
    res.status(200).sendFile(path.join(__dirname,"/public/index.html"));
        
});
app.get("/page1.html",function(req,res){
    console.log("User requested page1.html");
    res.status(200).sendFile(path.join(__dirname,"/public/page1.html"));
        
});
app.get("/page2.html",function(req,res){
    console.log("User requested page2.html");
    res.status(200).sendFile(path.join(__dirname,"/public/page2.html"));
        
});
app.post("/json",function(req,res){
    console.log("JSON Request received");
    res.status(200).json({"JSON Data": "True"});

})
app.get("*",function(req,res){
    console.log("User requested undifined URL");
    res.status(200).sendFile(path.join(__dirname,"/public/index.html"));
        
});
const server = app.listen(process.env.PORT_EXPRESS, function(){
    console.log("app started on port "+server.address().port);
});
