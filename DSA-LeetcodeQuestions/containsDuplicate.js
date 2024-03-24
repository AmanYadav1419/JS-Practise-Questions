// Question :- Given integer array nums return true if any value appears at least twice take in the array and return false if eery element is distnict

// Example 1:-
// Input num :- [1,2,3,1]
// output :- true

// Example 2:-
// Input num :- [1,2,3,4]
// output :- false

// Example 3:- 
// Input num :- [1,2,3,4,1,2,4,3,1]
// output :- true

let checkDuplicateOrNot = function(nums){
    let uniqueSet = new Set();

    for(let num of nums){
        if(uniqueSet.has(num)){
            return true
        }

        uniqueSet.add(num);
    }
    return false
}

// test Cases

const num1 = [1,2,3,1]
const num2 = [1,2,3,4]
const num3 = [1,2,3,4,1,2,4,3,1];

console.log(checkDuplicateOrNot(num1)); //it will return true
console.log(checkDuplicateOrNot(num2)) //it will return false
console.log(checkDuplicateOrNot(num3)) //it will return true