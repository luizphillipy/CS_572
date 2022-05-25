const filename="index.js";
const answer ="This is a good question";

const goodbye = function(){
    console.log("Good bye!");
}
const intro = function(){
    console.log("I am a node file called", filename);
}

const hello = function(name){
    console.log("Hello, ",name );
}
module.exports = {
    goodbye,
    intro,
    greeting:hello
}