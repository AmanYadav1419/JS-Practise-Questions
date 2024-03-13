// Closures in Javscript
// Ques 7:- Make this run only once

let view;
function username(){
    view = "Aman yadav";
    console.log("My username is ", view);
}

username();
username();
username();
username();
// it will print on console in equal to function call 
// that is My username is  Aman yadav it will print 4 times 

// to solve this we can do this 

let view1;
function username1(){
    let called = 0;

    return function(){
        if(called > 0){
            console.log("Already we know the username");
        } else{
                view1 = "Aman R. Yadav";
                console.log("My username is ", view1);
                called++;
        }
    };
}

let isWeKnowUser = username1();

// on first time it will print :- My username is  Aman R. Yadav

// but after that it will print for all function call:- Already we know the username
isWeKnowUser();
isWeKnowUser();
isWeKnowUser();
isWeKnowUser();

// now this is not a good approach but yess this is one of solution