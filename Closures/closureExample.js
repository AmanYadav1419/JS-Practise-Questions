// another example 

//global scope 
function subscribe(){
    var name = "Aman Yadav";
    // inner scope 2
    function displayname(){
        // inner scope
        alert(name);
    }
    displayname();
}
subscribe();

// it will still accesible in that the dissplayname is closure as it accessing name variable of another scope/function inside of his function 
// in other words closure gives you acess to an outer function's scope from an inner function 

// another example

function makeFunc(){
    var name1 = "Firefox";
    function displayname1(){
        console.log(name1);
    }
    return displayname1;
}

// we can do this 
makeFunc()(); //this second called displayname1 func 

// or we can have the method give down 

// var myFunc = makeFunc();
// myFunc();

// by passing params and argumets 

// varible declared outside of function called global scope
function makeFunc1(){
    var name2 = "myName"; //outer function scope 
    function displayname2(number){
        console.log(name2, number); //local scope
        //it will print myName 5 both name and number
    }
    return displayname2;
}

makeFunc1()(5);