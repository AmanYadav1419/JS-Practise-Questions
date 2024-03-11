let arr = [
    {name:"aman", gender:'male'},
    {name:"amani", gender:'female'},
    {name:"aabbc", gender:'male'},
    {name:"ccc", gender:'female'},
    {name:"xyz", gender:'notspecified'},
]

//one of the method but this create a new array 

let newarr = arr.filter(function(elem){
  return  elem.gender === 'male'
})
let newarr2 = arr.filter(function(elem){
  return  elem.gender === 'female'
})

// 2nd method 

// sabse pahle total non-male  count lo
let count = 0;
arr.forEach(function(elem){
    if(elem.gender !== 'male'){
        count++;
    }
})
// ek non male bande ko hatane ka code likho
for(let i=1;i<=count;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[j].gender !== "male"){
        arr.splice(j,1)
      }
    }
}

console.log(arr);
// phir usse code ko total non-male time tak chala do

