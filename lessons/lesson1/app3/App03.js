console.log("1: Start app");

const lateWork = setTimeout(function() {
    console.log("2: In setTimeout");
},3000);

console.log("3: End app");

const clearMyTimeout = setTimeout