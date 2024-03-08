// Function in Javascript
// Q13 - Arrow Functions

// arrow functions are introduced in es6 versions they are kind of work like functions normally but somehow they differ

const add = function (num1,num2){
    return num1 + num2;
};

// this is the example of normal regular declartion of function
// for converting this functionin arrow function we do like this :

const add1 = (num3,num4) => {
    return num3 + num4;
};

// this is what arrow function this have more cleaner syntax 

// 2nd differnce :- Implict "return" keyword
const square = (num) => num * num;

// 3rd differnce :- arguments
function fn(){
    console.log(arguments);
}

// fn(1,2,3);
// uncomment this upper line code to run the function

// we didn't pass any paramters still it returns all the paramters for this check console.log

// can we do this in arrow function lets check this out

const fnArr = () => {
    console.log(arguments);
};

// fnArr(1,4,6);
// uncomment this upper line code to run the function

// it will give error that ArrowFunctions.js:33 Uncaught ReferenceError: arguments is not defined

// 4th differnce :- "this" keyword
let user = {
    username: "Aman Yadav",
    //arrow function
    rc1: () => { 
        console.log("My Name is " + this.username);
    },
    // regular function
    rc2(){ 
        console.log("My Name is " + this.username);
    },
};

user.rc1();
// it will print on console :- My Name is undefined that is because that this keyword is pointing to the global object

user.rc2();
// it will print on console :- My Name is Aman Yadav that is because this keyword pointing to this username 