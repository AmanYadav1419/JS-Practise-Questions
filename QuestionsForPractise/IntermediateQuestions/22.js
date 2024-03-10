//Recursion:

// Implement a recursive function to find the nth fibonacci Number
// what is fibonacci = 0 1 2 3 5 8 ....n (basically it is an addition of curent num and previous num)
//n = 5
// n = 6 then on 6th 8 is present 
function fibonacciRecursiveFun(n){
    if(n<=1){
        return n;
    } else{
        return fibonacciRecursiveFun(n-1)+fibonacciRecursiveFun(n-2)
    }
}

// console.log(fibonacciRecursiveFun(2)) = 1
// console.log(fibonacciRecursiveFun(4)) = 3

//fib(2)+fib(1)
// fib(2)+1
//1+1