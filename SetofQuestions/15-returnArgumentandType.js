// 15 - Write a javascript function which accepts an argument and returns the type Note: There are six possible values that typeof returns : objects,boolean, function, number , string and undefinded

function TypeTeller(element){
    return typeof element;
}

console.log(TypeTeller([])) //object
console.log(TypeTeller("12")) //string
console.log(TypeTeller(12)) //number
console.log(TypeTeller(true)) //boolean
console.log(TypeTeller(undefined)) //undefined
console.log(TypeTeller(function(){})) //function