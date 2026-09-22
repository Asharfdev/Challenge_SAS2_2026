const prompt = require("prompt-sync")();

function calculerAgeChien() {

    let ageHumain = +prompt("enter age ");
    let dogAge = ageHumain * 7;
    console.log(dogAge);
    
}
calculerAgeChien();