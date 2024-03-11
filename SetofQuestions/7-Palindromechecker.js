// 7 - Write a javascript function that checks whether a passed string is palindrome or not

// lol this is palindrome either we can read it from left to right or right to left it is as it is 
// 1st method 

function palindromChecker(str){
    let reversed = str.split("").reverse().join("");

    if(reversed === str){
        return true;
    } else {
        return false
    }
}

console.log(palindromChecker("lol")) //true
console.log(palindromChecker("name")) //false

// 2nd but more advance aand simple method
function palindromChecker(str){
    let reversed = str.split("").reverse().join("");
    return reversed === str;
}

console.log(palindromChecker("lol")) //true
console.log(palindromChecker("name")) //false