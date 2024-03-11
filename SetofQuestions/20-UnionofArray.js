// 20 - write a javascript program to compute the union of two arrays 
// Sample Data :- console.log(union([1,2,3], [5,6,7]));
// => [1,2,3,5,6,7]

function unionOfArrays(arr1,arr2){
    return [...new Set(arr1.concat(arr2))]
}

console.log(unionOfArrays([1,2,3,4],[4,5,6,7,3])); //[1, 2, 3, 4, 5, 6, 7]