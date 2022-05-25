const filename="talk.js";
const answer ="This is a good question";

const goodbye = function(){
    console.log("Good bye!");
}
const intro = function(){
    console.log("I am a node file called", filename);
}

const hello = function(){
    console.log("Hello");
}
module.exports = {
    goodbye,
    intro,
    greeting:hello
}
