// Functions in Javascript
// Q9 - Function Hoisting - O/P Based Question

var x = 21;

var fun = function(){
    console.log(x);
    var x = 20;
};

fun();
// the output is Undefined 

// hosting works - it will initalise the first global scope then it will initlised local scope i.e create a seperate execution context for that function / local scope 

