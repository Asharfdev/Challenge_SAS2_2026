const read = require("prompt-sync")();

let N = +read("Enter a number: ");

let sum = 0;

for (let i = 1 ; i <= N ; i+=1) {

        sum = sum + i;
}

console.log(sum);