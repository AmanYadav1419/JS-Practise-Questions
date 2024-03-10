// Async Programming -  Async/Await

// Implement an async function to fetch data froman API and handle errors using try/ catch

async function fetchdData(url){
    try{
        let response = await fetch(url);
        if(!response.ok){
            throw new Error("Request failed with status :"+response.status);
        }
        return await(response.json())
    }
    catch(error){
        console.error("Error fetching data :"+error);
    }
}

fetchdData("https://jsonplaceholder.typicode.com/posts").then(data => console.log(data))