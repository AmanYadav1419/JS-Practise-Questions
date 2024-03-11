// 11 -  Loop an array and all the members of it 

let arr = [1,2,3,4,5,6,7];
let sum = 0;
arr.forEach(function(elem){
    sum +=  elem
})

console.log(sum) //28

// if not understand this is more simpler one same but undertsnading is easy
let sum1 = 0
arr.forEach(function(elem){
    sum1 = sum1 + elem;
})

console.log(sum1) //28