// 4 - How would you check if a number is an integer is or not 

//one method is and the shortest one 😎

console.log(Number.isInteger(122)) //return true
console.log(Number.isInteger(1.8)) //return false 
console.log(Number.isInteger(1.0)) //return true

// 2nd method 

let a = 12;  //for a it will console integer 
let b = 12.9 //but for b it will console not an integer

if(a%1 === 0){
    console.log("Integer")
} else {
    console.log("not an Integer !")
} 