// Higher-Order Function:

// Use 'map()' to double all the elements in an array 

let arr = [10,35,20,18,40,50];

function doubleArrayElemts(arr){
    return arr.map( num=> num*2)
}

console.log(doubleArrayElemts(arr))
console.log(arr)