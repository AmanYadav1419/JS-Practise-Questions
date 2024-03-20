// Currying in Javascript
// Question 6 :- curry() implementation
// Converts f(a, b, c) into f(a)(b)(c)

function curry(func){
    return function curryiedfunction(...args){
        if(args.length >= func.length){
            return func(...args)
        } else{
            return function(...next){
                return curryiedfunction(...args, ...next);
            };
        }
    };
}

const sum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum);

console.log(totalSum(1)(5)(6)(5)); //it will give 17