const fs=require("fs");
console.log("Going to get a file...");
fs.readFile("shorFile.txt",function(err,buffer){
    console.log("got a file", buffer.toString().substring(0,21));
});
console.log("App continues..");