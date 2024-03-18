// Currying in Javascript
// Question 1 :- sum(2)(6)(1)

// by simple method not implemented like sum(2)(6)(1)

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 6, 1)); 
//it will give output as 9

function sum1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum1(2)(6)(1));

// this will also give the same output but sum1 example is solve by using currying 
