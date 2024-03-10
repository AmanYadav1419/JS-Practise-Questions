// Async Programming -
// Callbacks :
// IMP Topic
// Implement a function that makes multiple API calls and Process the data using Callbacks

function makeAPIcall(url,Callbacks){
    fetch(url)
    .then(response => response.json())
    .then(data => Callbacks(data))
    .catch(err=> console.error("Error during API Call :",err.message))
}

function handleData(data){
    console.log("process Data",data)
}

//for api call func
function main(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'
    const apiUr2 = 'https://jsonplaceholder.typicode.com/posts/2'

    makeAPIcall(apiUrl,handleData);
    makeAPIcall(apiUr2,handleData);
}

main();