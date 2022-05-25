const talk = require("../talk");
const question = require("../talk/question");
const answer = question.ask("What is the meaning of life? ");
console.log(answer);
talk.greeting("Luiz");
talk.intro();
talk.goodbye();