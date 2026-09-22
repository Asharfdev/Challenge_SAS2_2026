// const prompt = require("prompt-sync")();
// let number = prompt("Enter a Number :")

// function  charactercounter(number) {
//     let count = 0 ;
//     for (let i = 0; i < number.length; i++) {
//         count ++
//     }
//     return count;
// }  
// console.log(charactercounter(number));


 const prompt = require("prompt-sync")();
 let word = prompt("Enter a word :")

function charactercounterme(word) {
    let i = 0 ;
    while (i<word.length) {
        i++;
    }
    return i;
    
} console.log(charactercounterme(word));
