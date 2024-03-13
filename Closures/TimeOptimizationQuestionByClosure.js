// Closures
// Ques 3:- Time Optimization

function find(index){
    let a = [];
    for(let i = 0; i < 1000000; i++){
        a[i] = i * i;
    }
    
    console.log(a[index]); //it will 36
}

console.time("6");
find(6); //and for finding 6:72.071044921875 ms (it can vary continously bcz of machine)
console.timeEnd("6");
console.time("12");
find(12); //and for finding 12:97.195068359375 ms (it can vary continously bcz of machine)
console.timeEnd("12");


// we can optimizse by this way

function find1(){
    let b = [];
    for(let i = 0; i < 1000000; i++){
        b[i] = i * i;
    }
    
    return function(index){
        console.log(b[index]);
    }

}

const closure = find1();

console.time("4");
closure(4); // for 4 it now 4:- 0.381103515625 ms it can vary continue according to machine but it optimized
console.timeEnd("4");
console.time("13");
closure(13); //for 13 it now 13:-  0.147216796875 ms it can vary continue according to machine but it optimized 
console.timeEnd("13");