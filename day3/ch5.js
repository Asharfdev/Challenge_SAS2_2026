function additionnerTout() {

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum = arguments[i] + sum ;
       
    }
     console.log(sum);
    // return sum;
}
 additionnerTout(1,2,3)

