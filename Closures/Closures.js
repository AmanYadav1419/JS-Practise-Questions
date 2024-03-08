// Closures in Javascript :
// A closure is function that refernces a variables in the outer scope from its inner scope

// for understanding the concept of closure we need to understand the concept of Lexcial scope 

// Lexical Scope

//this is in a global scope
var username = "AmanYadav"; 

function local(){

    console.log(username);
    // in this called local scope
    // it will print the output on console as : AmanYadav

    var secondname = "YadavAman";
}

console.log(secondname); // it will give error secondname is not defined 
// so we cannot acess the variables from inside of the function we can only acess the variables that are outside of the local scope


local(); //calling the function

// then what is lexical scope : 
// a lexical scope in JS means that a variable definded outside a function can be accesiable inside of a another function defined after a variable declartion, but the opposite is not true the variable defined inside the function will not be accesible outside that function