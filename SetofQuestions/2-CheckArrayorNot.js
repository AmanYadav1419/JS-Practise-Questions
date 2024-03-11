// 2- How to check if an array is an array or not? 
// provide some code  

// we cannot used typeof as it will called [] to object and {} to object so we can't used typeof


function checkArray(elem){
   return Array.isArray(elem);
}

console.log(checkArray([])); //returns true
console.log(checkArray({})); // returns false 


// 2nd ay by direct console log 

function checkArray(elem){
    console.log(Array.isArray(elem));
}
checkArray([]); //it will also return true
checkArray({}); //it will also return false
