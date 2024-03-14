// Closures in javascript
// Ques 8:- Once Polufill
// this is only runs one problem solution with a better approach

function once(func, context){
    let ran;

    return function(){
        if (func){
            ran = func.apply(context || this, arguments);
            func = null;
        }

        return ran;
    };
}

const hello = () => console.log("hello");

hello();
hello();
hello();

// it will print 3 times hello as it calls three times

const hello1 = once(() => console.log("hello world"));

hello1();
hello1();
hello1();

// it will only print once 