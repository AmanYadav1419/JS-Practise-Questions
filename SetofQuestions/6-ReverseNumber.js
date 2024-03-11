// 6 - write a javascript function that reverse a number 

// 1st Method :

function reverseNumber1(number){
    return Number(number.toString().split("").reverse().join(""))

    console.log(Number(executed))
}

console.log(reverseNumber3(12)); //21


// or this but in more simple method 


function reverseNumber2(number){
    executed = number.toString().split("").reverse().join("")

    console.log(Number(executed)) 
}

reverseNumber2(12); //21

//2nd Method

function reverseNumber3(number){

    let reverse = 0;

    while(number > 0){
        let reminder = number%10;
        reverse = reverse*10+reminder;
        number = Math.floor(number/10);
    }
    return reverse;
}
// console.log(1/10) = 0.1 by math.floor it is equal to only 0
console.log(reverseNumber3(1234)) //4321
console.log(reverseNumber3(3457)) //7543