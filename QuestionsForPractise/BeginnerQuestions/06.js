// Conditional :
// write a function that checks if number is even or odd and return "Even or Odd" accordingly 

function checkEvenorOdd(num){
    if(num % 2 == 0){
        return "Even";
    } else{
        return "Odd";
    }
}

console.log(checkEvenorOdd(15));
console.log(checkEvenorOdd(120));
console.log(checkEvenorOdd(71));
console.log(checkEvenorOdd(20));