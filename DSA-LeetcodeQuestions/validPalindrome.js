// Input s = "A man, a plan, a canal: Panama"
// Output: true

// Example 2 :- 
//Input s = "race a car"
// Output: false

function checkPalindrome(s){
    const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    return cleanS === cleanS.split('').reverse().join('');
};

console.log(checkPalindrome("A man, a plan, a canal: Panama")); //it will return true
console.log(checkPalindrome("race a car")); //it will return false 