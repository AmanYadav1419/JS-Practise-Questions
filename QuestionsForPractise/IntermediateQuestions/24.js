// Closure:

// Implement a private variable using closure 

function privateVariable(){
//private variable
let count = 0;

//Innerfunction or closure
function increment(){
    count++;
    console.log("Count is :",count)
    }

    return{
        incrementCounter:function(){
            increment();
        },
        getCount:function(){
            return count;
        }
    }

}

const counter = privateVariable();
console.log(counter); //{incrementCounter: ƒ, getCount: ƒ}
counter.incrementCounter(); //Count is : 1
counter.incrementCounter(); //Count is : 2
console.log(counter.getCount()) // 2