// 9 - write a javascript function that accepts a string as a parameter and converts the first letter of each word of the string in uppercase
// for example = aman bro kya hal chal => Aman Bro Kya Hal Chal

function captilizeString(str){
    let allwords = str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.substring(1)
    })
    // console.log(allwords) 
    return allwords.join(" ");
}

console.log(captilizeString("aman bro kya hal chal")); //Aman Bro Kya Hal Chal
console.log(captilizeString("kvn nahi nana")); //Kvn Nahi Nana