// what is Currying :-
// Currying is a function in javascript, it takes one argument at a time and returns a new function expecting the next argument
// it is a convertion of functions from callable as this f(a,b) into callable as this f(a)(b)

// and Curried functions are construted by chaining closures by immediately returning their inner functions simultaneously

// Currying in JavaScript
// Example f(a,b) into f(a)(b)

function f(a,b){
    console.log(a, b)
}
// so we need to conert this upper function f(a,b) into f(a)(b)
// so let's see how can we do that

function f1(c){
    // as defination it takes one argument at a time and returns a new function expecting the next argument
    return function(d){ 
        return `${c} ${d}`;
    };
}

console.log(f1(5));
//  in console we get another function i.e ƒ (d){ 
//         return `${c} ${d}`;
//      }

// but we will console like this for a perfect output
console.log(f1(5)(6));
// it will print 5 6
// this is what we can called Currying is