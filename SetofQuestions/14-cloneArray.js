// 14 - write a javscript function to clone an array
// 1st Method
function clonearr(arr){
    return [...arr];
}

const newarr1 = clonearr([1,2,3,4,5]);
console.log(newarr1) // [1, 2, 3, 4, 5]

//2nd method

function clonearr2(arr){
    let newarr2 = [];
    arr.forEach(function(e){
        newarr2.push(e);
    })

    return newarr2
}

let abcd = [1,4,6,8,9];

let newarr3 = clonearr2(abcd); //[1, 4, 6, 8, 9]

// 3rd method

function clonearr3(arr){
    return arr.map(function(e){
        return e;
    })
}

let newarr4 = clonearr3([1,23,67,8]); // [1, 23, 67, 8]