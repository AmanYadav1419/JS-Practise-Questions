// Closure 
// Every closure has three scopes:
// 1. Local Scope (own scope)
// 2. Outer Function Scope
// 3. Global Scope

// varible declared outside of function called global scope
var username = "Aman Yadav"
function makeFunc1(){
    var name3 = "myName"; //outer function scope 
    function displayname2(number){
        console.log(name3, number, username); //local scope
    }
    return displayname2;
}

makeFunc1()(10);

//it will print myName 5 both name, number and username
// scope chain means it have the access of it outer scope as well and the scope of it parent

// another example

// global scope
var e = 20;
function sum(a){
    return function (b){
        return function (c){
            // outer functions scope
            return function (d){
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}

console.log(sum(1)(2)(3)(4)); //log 30 

// function d have the acess of all 