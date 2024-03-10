// String Manipulation 
// write a function that takes a string and return the reversed string

let str = "Hello World";

function reverseStirng(str){
    return str.split("").reverse().join("")
}

console.log(reverseStirng(str));