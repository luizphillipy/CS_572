const fs=require("fs");
console.log("1: AppStart");

const buffer = fs.readFileSync("largeFile.txt");
console.log("2: got the file",buffer.toString().substring(0,21));
console.log("3 App end");
