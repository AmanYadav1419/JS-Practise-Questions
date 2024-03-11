// 18 - write a javascript program to find the most frequent item of an array

function frequent(arr){
    let freq = {};
    arr.forEach(function(elem) {
        if(freq.hasOwnProperty(elem)) freq[elem]++;
        else freq[elem] = 1
    });
    
    console.log(freq) //it will give a keys like structure

    const ans = Object.keys(freq).reduce(function(accumlator, next){
        return freq[accumlator] > freq[next] ? accumlator : next ;
    })
    console.log(ans) //3 it is the most frequent in an array
}

frequent([1,3,4,6,7,4,3,2,1,2,3,3,3,4,5,6,7,8,3,2,2,1,3,2,3]) //3
frequent([3,6,4,5,7,8,4,2,3,1,4,5,6,7,8,9,0,8,6,5,4,3,5,5,4,6,4,5]) //5