const numbers = [5, 10,15]
let sum = 0;
function calculerSum() {
    
    for (let i = 0; i < numbers.length; i++) {
         sum += numbers[i];
       
    }

     return sum
    
} calculerSum();
console.log(sum);
 
