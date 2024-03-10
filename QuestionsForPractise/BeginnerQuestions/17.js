// Array Methods:

// Find the largest element in array using 'reduce()' method 

let arr = [10,30,40,60,70,15,99];
let arr1 = [20,70,40,30,45,50] //for again cross check 

function findLargestElemt(arr){
    return arr.reduce((max,current)=>
        current > max ? current: max)
    }


let reduce = findLargestElemt(arr1) // arr can also be passed
console.log(reduce)