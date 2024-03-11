// 1 - Given a String , reverse each word in the sentence and print it 
// for e.g hello how are you => olleh woh era uoy 

let str = "hello how are you";

var Savedstr = str.split(" ")
.map(function(word){
    return word.split("").reverse().join("")
})

console.log(Savedstr.join(" ")); //olleh woh era uoy