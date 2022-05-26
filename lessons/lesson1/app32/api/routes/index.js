const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

const app = express();

app.use("/api",routes)


router.route("/")
.get(function(req,res){
    console.log("Get received");
    res.status(200).send("hello")
});

router.route("/games")
.get(gameController.getAll);


router.route("/games/:gameIndex")
.get(gameController.getOne);




//separation of concerns for business logic in diferent file of routes.
router.route(["/json","/j"])
    .get(jsonController.json);


router.route("/index.html")
.get(function(req,res){
    console.log("Get received");
    res.status(200).sendFile
});








