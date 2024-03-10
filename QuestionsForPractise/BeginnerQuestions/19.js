// Date and Time:

// Create a function that display the current Date and Time in a specific format 

function CurrentDateandTime(){
    let currentDate = new Date(); //from this by using console we can get date and time bu for good and proper manner we use next line
    return currentDate.toLocaleString();
}

console.log(CurrentDateandTime()) //for proper standard 
// console.log(new Date()) by using this we also get currentdate and time but not in proper manner 