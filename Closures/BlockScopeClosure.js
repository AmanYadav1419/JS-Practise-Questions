// Closures
// Ques 4:- Block Scope and setTimeout

function a(){
    for(var i = 0; i < 3; i++){
        setTimeout(function log(){
            console.log(i); //What is Logged?
        }, i * 1000)
    }
}

// uncomment below function call for checking the code execution
// a(); 

// it will print 3 thress times 
// and it happens because of var
// var doesn't haas block scope it has function scope
// settimeout only executes when code completes so on first var = 0 but it is not printed as for loop is not finished
// so we have refernnce of that in memory and it is cycle for 1 2 
// and then for loop will stop and setTimeout the js engine will print the last present value so it is 3 so it will print 3 three times

// so what's the soluton for this using let instead of var

function b(){
    for(let i = 0; i < 3; i++){
        setTimeout(function log(){
            console.log(i); //What is Logged?
        }, i * 1000)
    }
}
// uncomment below function call for checking the code execution
// b();

// it will print 0 1 2 by the delay of 1 second
// let has block scope

// sometimes interviewr say don't use let solve this problem using var and print output as 0 1 2 
// how to do this :- by using closures let's do this

for(var i = 0; i < 3; i++){
    function inner(i){
        setTimeout(function log(){
            console.log(i); //What is Logged?
        }, i * 1000);
    }
    
    inner(i);
}

// and yess we got the output :- 0 1 2 in console