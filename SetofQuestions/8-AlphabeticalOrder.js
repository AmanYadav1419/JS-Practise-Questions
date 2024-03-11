// 8 - write a javascript funtion that returns a passed string with letters in alphabetical order
// for example : apple => it will return alphabetical sequence like ths => aelpp

function alphabeticalOrder(str){
    return str.split("").sort().join("");
}

console.log(alphabeticalOrder("apple")) //aelpp
console.log(alphabeticalOrder("aman")) //aamn
