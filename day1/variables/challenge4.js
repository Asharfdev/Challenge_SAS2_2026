const prompt = require("prompt-sync")();

let distance = prompt ("Enter distance: ");
let fuel = prompt ("Enter fuel: ");
let consumption =(fuel / distance) * 100;

console.log("consumption:", consumption, "l/100 km")