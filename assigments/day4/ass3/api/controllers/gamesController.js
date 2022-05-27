
const dbConnection = require("../../data/dbconnection");
const getThreeGames = function(req, res){
    console.log("returning 3 first games..");
    const db = dbConnection.get();
    const numberOfGamesReq=parseInt(process.env.DEFAULT_NUMBER_OF_GAMES,10);
    const gamesCollection = db.collection("games");
    gamesCollection.find().limit(numberOfGamesReq).toArray(function(err,games){
        console.log("returning 3 games: ",games);
        res.status(200).json(games);
    });
}
const getUserDefinedGames = function(req,res){
    let numberOfGamesReq = parseInt(req.params.numberOfGames);
    if(numberOfGamesReq>=10){
        numberOfGamesReq=10;
    }
    console.log("Number of games to be returned ",numberOfGamesReq);
    const db=dbConnection.get();
    const gamesCollection = db.collection("games");
    gamesCollection.find().limit(numberOfGamesReq).toArray(function(err,games){
        console.log("returning ",games);
        res.status(200).json(games);
              
    });
}
module.exports = {getThreeGames,getUserDefinedGames};