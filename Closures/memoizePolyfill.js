// Closures in javascript
// Ques 9:- Memoize Polyfill or implementing a Caching/Memoize function

const clumsysquare = (num1, num2) => {
    for(let i = 0; i <= 100000000; i++){}

    return num1 * num2;
};

console.time("First call");
console.log(clumsysquare(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log(clumsysquare(9467, 7649));
console.timeEnd("Second call");

// the output is this it varies everytime after reload:
// memoizePolyfill.js:11 72413083 
// memoizePolyfill.js:12 First call: 160.4599609375 ms
// memoizePolyfill.js:15 72413083
// memoizePolyfill.js:16 Second call: 168.39990234375 ms

// so we need to reduce this answer is given below

function myMemoize(fn, context){
    // creating a variable for storing results
    const res = {};
    return function(...args){
        // converting all the args to string
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache];
    };
}


const clumsyProduct = (num1, num2) => {
    for(let i = 0; i <= 100000000; i++){}

    return num1 * num2;
};

const memoizedClumzyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("Second call");

// so it will give this output
// memoizePolyfill.js:49 72413083
// memoizePolyfill.js:50 First call: 141.68310546875 ms
// memoizePolyfill.js:53 72413083
// memoizePolyfill.js:54 Second call: 0.429931640625 ms

// explanantion : at first it will initally check that it is present or not if not then it will add it 
// then on second console it is present so it will give result it very less time that is called Caching or Memoizing 

// this is one of the most important try to solve more questions

// res = {
//     "5,6": 30,    
// };
// this is what a res object will look like and if it will finds out already has those parameters so it just gonna return the values
