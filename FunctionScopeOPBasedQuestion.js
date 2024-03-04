// function in javascript
// Q7 - Function Scope - OutPut Based Question

for (let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    }, i * 1000);
}
// let has the block scope so it will print in a sequence like : 0 1 2 3 4

// but var has no block scope 

for (var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    }, i * 1000);
}

// it will print 5 five times 