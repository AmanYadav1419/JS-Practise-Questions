// Functions and scope :

// Create a function that generates a random number between a given range 

function randomNumber(min,max){
   return  Math.floor(Math.random()*(max-min+1))+min;
}

console.log(randomNumber(50,100))