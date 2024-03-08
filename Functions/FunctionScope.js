// functions in Javascript
// Q6 - Function Scope 

var num1 = 10,
    num2 = 4,
    name = "Aman Yadav";

function multiply(){
    return num1 * num2;
}

console.log(multiply()); //Return 40

// A nested Function example 

function getScore(){
    var num1 = 2,
        num2 = 3;

    function add(){
        return name + " Scored " + (num1 + num2);
    }

    return add();
}

console.log(getScore()); //Returns "Aman Yadav Scored 5"