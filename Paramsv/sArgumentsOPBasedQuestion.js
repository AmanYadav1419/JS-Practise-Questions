// Functions in javascript
// Q11 - Params vs Arguments - O/P Based Question

// const fn = (a, ...numbers, x,y) => {
//     console.log(x, y)
// };

// fn(3,7,4,8,2,9);
// it will give this error :  Rest parameter must be last formal parameter

// so that is rest operator or spread operator it should always be last one so the correct ans is :

const fn = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
};

fn(3, 7, 4, 8, 2, 9);
// it will give OP as 7 4 and [8, 2, 9] 