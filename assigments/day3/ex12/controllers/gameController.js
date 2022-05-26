const gamesData = require("../public/data/games.json");

module.exports.getAll = function(req,res){
    console.log("GET all Games Data");
    res.status(200).json(gamesData);
}