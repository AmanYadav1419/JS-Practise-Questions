// 5 - make this work : 
// duplicate([1,2,3,4,5,6]);

//ans should be: [1,2,3,4,5,6,1,2,3,4,5,6];

// solved by concat

function duplicate(arr){
    return arr.concat(arr);
}

console.log(duplicate([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
console.log(duplicate([1,2,3,4])); //[1, 2, 3, 4, 1, 2, 3, 4]

function duplicate(arr){
    console.log(arr.concat(arr));
}

duplicate(['a','b','c']) //['a', 'b', 'c', 'a', 'b', 'c']
duplicate(['a','b','c','d']) //['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']