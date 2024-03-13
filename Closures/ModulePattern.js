// Closures in Javascript
// Ques 6:- What is Module Pattern ?

// so a module pattern will looks like this 
var Module = (function () {
    function privateMethod(){
        // do something
        console.log("private");
    }

    return {
        publicMethod: function() {
            // can call privateMethod();

            console.log("public");
        },
    };
})();

Module.publicMethod(); //it will print public but

Module.privateMethod(); //it will gives an error :- ModulePattern.js:22 Uncaught TypeError: Module.privateMethod is not a function

// highly recommend to learn by itself on module pattern 