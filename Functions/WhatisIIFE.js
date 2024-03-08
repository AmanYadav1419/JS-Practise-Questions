// functions in Javascript 
// Q4 - What is IIFE ?

// IIFE stands for Immeditely Invoked Function Expressions

function square(num){
    console.log(num * num);
}

square(6);

// rather than this we do this for IIFE

(function square(num){
    console.log(num * num);
})(7);

// Q5 - IIFE - Output Based Questons ?

(function (x){
    return (function (y){
        console.log(x);
    })(2);
})(1);

// ans is 1 (this is done by clousre )

// What is Closure now :-
// Ans:- the ability of a function to acess variable and functions that are lexically out of the scope are called closures 

// so closures are created whenever a new function is created because the function has that refernce to its outer scope 