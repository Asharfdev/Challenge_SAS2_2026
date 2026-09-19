const read = require("prompt-sync")();
let participants = +read("enter a number ");

for( let i = 1; i <= participants; i++){
    console.log("Participant " + i);
}