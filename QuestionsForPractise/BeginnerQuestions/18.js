// Array Methods:

// Remove all occurrence of a specific Element from an array 

let arr = [10,30,8,90,8,20,8];
let target = 8;

function removeElementFromArray(arr,target){
    return arr.filter(item => item !== target)
}

let remove = removeElementFromArray(arr,target)
// console.log(arr) actual arr
console.log(remove); // filter removed arr 
