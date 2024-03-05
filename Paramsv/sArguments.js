// Function in javascript
// Q10 - Parameters vs Argument

function square(num){ //this is called parameters in that case num is the params
    console.log(num * num);
}

square(6); //the values that will pass here are called arguments in that case 6 is argument

// spread vs rest operator

function multiply(num1, num2){
    console.log(num1 * num2);
}

var arr = [5,6]

multiply(...arr); //in this we use ... called spread operator and 

function multiply1(...nums){ //in this ... operator called rest operator 
    console.log(nums);
}
var arr1 = [5,6]

multiply(...arr1);