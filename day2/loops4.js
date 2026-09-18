const read = require("prompt-sync")();

let userN = +read("Enter a number: ");

let result = 1;
for (let i = 1; i <= userN; i++) {
    result *= i;
}
console.log(result)