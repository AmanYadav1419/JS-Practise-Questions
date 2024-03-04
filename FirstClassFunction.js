// functions in Javascript 
// Q3 - What are First Class Functions ?

// Ans :- In a language where a function can be treated like a variable there functions are called as first class function, in these cases functions can be passed into another functions can be used manipulated and return from those functions and basically that everything that a variable can do a function can also do,this is why a function in js called first class function for eg

function square(num){
    return num * num;
}

function displaySquare(fn){
    console.log("Square is " + fn(5));   
}

displaySquare(square);