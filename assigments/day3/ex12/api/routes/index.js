const express = require("express");
const router = express.Router();
const gameController=require("../../controllers/gameController")
router.route("/games")
.get(gameController.getAll);


module.exports =router;
