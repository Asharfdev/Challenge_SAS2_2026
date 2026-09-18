const prompt= require("prompt-sync")();
let pn = prompt("please enter a number")

for ( let i = 0; i <= pn ; i+=2) {
    console.log("Participant ", i);
}

