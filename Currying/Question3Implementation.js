// Currying in Javascript
// Question 3 :- Infinite Currying -> sum(1)(2)(3).....(n)

// for example :-
// sum(1)(2) //3
// sum(1)(2)(4)(3) //10


function add(a){
    return function (b){
        if(b) return add(a+b);
        return a;
    };
}

console.log(add(5)(2)(4)(8)()); //so finally it will get 19
// let try one more time  
console.log(add(5)(2)(4)(8)(3)(4)()); //so finally it will get 26

// it will executing infinite times 