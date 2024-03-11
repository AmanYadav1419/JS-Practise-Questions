// 12 - in an array of numbers and strings, only add those members which are not strings

let arr = [1,3, 'aman', 8, 'sham', 'ram', 4, 'aaa', 5, 'bbb',6,7];
let sum = 0;
arr.forEach(function(elem){
    if(typeof elem === 'number'){
        sum += elem
    }
})

console.log(sum) //34