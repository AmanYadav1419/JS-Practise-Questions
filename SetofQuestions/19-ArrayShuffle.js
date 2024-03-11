// 19 - Write a javascript function to shuffle an array
// [1,2,3,4,5] => [3,4,1,2,5] matalb randomize or shuffle kara do 

function ArrayShuffle(arr){
    // sabse pahele kitna area suffle area hai
    let totalShuffleArea = arr.length
    // ek random number nikalo
    while(totalShuffleArea > 0){
            totalShuffleArea--;
        let indexToBExchanged = Math.floor(Math.random()*totalShuffleArea)
        let temp = arr[totalShuffleArea];
        arr[totalShuffleArea] = arr[indexToBExchanged];
        arr[indexToBExchanged] = temp;
        }
    
    return arr;
}

console.log(ArrayShuffle([1,2,3,4,5,6,7])) //[5,1,4,7,3,2,6] always get random array