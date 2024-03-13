// Closure

// Ques 2:- write a function that would allow you to do this
// var addSix = createBase(6);
// addSix(10);
// addSix(21);

function createBase(num){
    return function (innerNumber){
        console.log(innerNumber + num);
    };
}

var addSix = createBase(6);
addSix(10); //it will returns 16 as it adds 6 + 10 
addSix(21); //it will returns 27 as it adds 6 + 21 


