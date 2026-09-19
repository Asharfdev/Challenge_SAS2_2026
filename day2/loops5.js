const read = require('prompt-sync')();

let uNum1 = +read("Emter number 1 : ");
let uNum2 = +read("Emter number 2 : ");

for ( let i = uNum2 ; i <= uNum1; i += uNum2){

    console.log(i);

}