// Closures in javascript
// Ques 5:- How would you use a closure to create a private counter ?

function counter(){
    var _counter = 0; // i put underscore here because it is a convention over here,
    //  and it is a good practise although this is not necessary

    function add(increament){
         _counter += increament; 
    }

    function retrive(){
        return "Counter = " + _counter; 
    }

    return {
        add,
        retrive,
    };
}

const d = counter();
d.add(5);
d.add(15);

console.log(d.retrive());
// it will print counter = 20
// this  is similar with called a module pattern which will discuss in next question