const gamesDate = require("../data/games.json");

const getAll = function(req,res){
    console.log("get all games");
    let count =5;
    let offset=0;
    
    if(req.query && req.query.count){
        count = parseInt(req.query.count);
    }
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset);
    }
    console.log("offset+count: ",offset+count, "offset ",offset);
    const pageGames = gamesDate.slice(offset,offset+count);
    res.status(200).json(pageGames)
}
const getOne = function(req,res){
    console.log("get one games");
    const index = req.params.gameIndex;
    res.status(200).json(gamesDate[index])
}

module.exports = {
    getAll,
    getOne
}