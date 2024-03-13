// closures in javascript
// Ques 1:- what will be logged to console?

let count = 0;
(function printcount(){
    if(count === 0){
        let count = 1; //this called shadowing
        console.log(count); //it will print 1
    }
    console.log(count); //it will print 0
})();

