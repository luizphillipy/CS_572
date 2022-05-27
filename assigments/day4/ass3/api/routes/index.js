const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/gamesController");

//return 3 games
router.route("/games")
.get(gamesController.getThreeGames)
//user defines how many games he want to retrive but at most 10 games will be returned.
router.route("/games/:numberOfGames")
.get(gamesController.getUserDefinedGames);

module.exports=router;