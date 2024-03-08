// Functions in Javascript
// Q8 - Function Hoisting

function functionName(){
    console.log("Hello World!");
}

functionName();
// it will work fine and get console as : Hello World!

// but what if we do like this 
functionName1();

function functionName1(){
    console.log("Hello World!1");
}

// it will still works that is whole function get hoisted that is complete function get copy to scope that is global scope
 