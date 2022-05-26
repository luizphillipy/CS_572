const express = require("express");
const router = express.Router();

const app = express();

app.use("/api",routes)


routes.route("/")
.get(function(req,res){
    console.log("Get received");
    res.status(200).send("hello")
});
router.route("/json")
.get(function(req,res){
    console.log("Get received");
    res.status(200).json({"mensage":"JSON message"});
});
router.route("/index.html")
.get(function(req,res){
    console.log("Get received");
    res.status(200).sendFile
});








