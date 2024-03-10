// Async programming :
// Promises :

// Rewrite the previous exercise using Promises (it's better way)

function makeAPIcall(url){
   return fetch(url)
    .then(response => response.json())
}

function handleData(data){
    console.log("process Data",data)
}

//for api call func
function main(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'
    const apiUr2 = 'https://jsonplaceholder.typicode.com/posts/2'

    makeAPIcall(apiUrl).then(handleData).catch(err=>console.log('Error'));
    makeAPIcall(apiUr2).then(handleData).catch(err=>console.log('Error'));
}

main();