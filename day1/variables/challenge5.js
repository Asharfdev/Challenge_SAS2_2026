const prompt = require("prompt-sync")();
let duration = prompt ("Enter movie duration in mins :")

if (duration < 60) {
    console.log("Court metrage");
} else if (duration < 120){
   console.log("leture film");
} else{
   console.log("long film")
};