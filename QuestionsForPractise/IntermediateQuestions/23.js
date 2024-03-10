// Closures :

// Create a counter function using Closures that increments and returns the count on each call 

function CreateCounter(){
    let count = 0;
    return function(){
        return ++count;
    }
}
let counter = CreateCounter();
console.log(counter());//1
console.log(counter());//2
console.log(counter());//3