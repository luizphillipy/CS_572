

const MongoClient = require("mongodb").MongoClient;
let _connection=null;
const get = function(){
    return _connection;
};
const open = function(){
    if (get()==null){
        MongoClient.connect(process.env.DB_URL, function(err,client){
            if(err){
                console.log("DB Connection failed",err);
                return;
            }
            _connection = client.db(process.env.DB_NAME);
            console.log("DB Connection open ",_connection);
        });
    }
}

module.exports = {
    open:open,
    get:get
}
