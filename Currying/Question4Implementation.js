// Currying in Javascript
// Question 4 :- Currying vs Partial Application

function sum(a){
    return function (b,c){
        return a + b + c;
    };
}

const x = sum(10);
console.log(x(5,6)); //it will give 21
console.log(x(4,3)); //it will give 17

// or we can called like this
console.log(sum(10)(4,8)); //it will give 22

// the above function is not a Currying Function it is a Partial Application
// What does partial application does is :-
// it transform a function into another function with small arity, arity means number of operands,or arguments a function recieves


// if we want to write the same function wit Currying then it is this 

function sum1(d){
    return function(e){
        return function(f){
            return d + e + f;
        };
    };
}

console.log(sum1(3)(5)(10)); ////it will give 18