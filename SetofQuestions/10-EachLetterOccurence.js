// 10 - write a javascript function to get the number of occurence of each letter in specified string
// for example agar string hai "apple" to ham check karenge har ek letter ki occurence kitni hai in given string : apple => a=1, p=2,l=1,e=1

function OccurenceChecker(str){
    let occurences = {};
    str.split("").forEach(function(elem) {
        if(occurences.hasOwnProperty(elem) === false){
            occurences[elem] = 1; 
        }
        else{
            occurences[elem]++;
        }
    })

    return occurences;
}

console.log(OccurenceChecker('apple')); // {a: 1, p: 2, l: 1, e: 1}
console.log(OccurenceChecker('loop')); //{l: 1, o: 2, p: 1}