// Recursion : 

// Write a recursive function to calculate the factorial of a given number 
// logic:
// fact = 5! = 5*4*3*2*1
// fact(n) = n*n-1*n-2...
// n!=n*(n-1)! 

function FactorialFind(n){
    if(n===1){
        return 1;
    }else{
    return n*(FactorialFind(n-1))
    }
}
console.log(FactorialFind(5))
//5* factorial(5-1)
//4* factorial(4-1)
//3* factorial(3-1)
//2* factorial(2-1)
// 1