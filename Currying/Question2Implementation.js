// Currying in Javascript
/* Question 2 - 
    evaulate("sum")(4)(2) => 6
    evaulate("multiply")(4)(2) => 8
    evaulate("divide")(4)(2) => 2
    evaulate("substract")(4)(2) => 2
*/

function evaulate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "substract") return a - b;
      else return "Invalid Operation";
    };
  };
}

console.log(evaulate("sum")(4)(2));
// it will print output as 6

console.log(evaulate("multiply")(4)(2));
// it will print output as 8

console.log(evaulate("divide")(4)(2));
// it will print output as 2

console.log(evaulate("substract")(4)(2));
// it will print output as 2

console.log(evaulate("kuch to do")(4)(2));
// it will print Invalid Operation

// or simply you can use as it like this since currying means use the code again and again
const multiply = evaulate("multiply");

console.log(multiply(3)(4)) //it will give output as 12
console.log(multiply(4)(6)) //it will give output as 24

// so this is one of use of currying that we initalised the function once and we will use it as many times as we want