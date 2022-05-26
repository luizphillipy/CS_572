const express = require("express");
const router = express.Router();
const jsonController = require("./")

const app = express();

app.use("/api",routes)


routes.route("/")
.get(function(req,res){
    console.log("Get received");
    res.status(200).send("hello")
});

//separation of concerns for business logic in diferent file of routes.
router.route(["/json","/j"])
    .get(jsonController.json);


router.route("/index.html")
.get(function(req,res){
    console.log("Get received");
    res.status(200).sendFile
});








