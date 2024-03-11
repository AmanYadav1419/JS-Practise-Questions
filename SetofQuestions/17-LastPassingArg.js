// 17 - write a javscript function to get the last element of an array . passing a parameter 'n' will return the last 'n' elements  of the array
function retrieve(arr, n = 1){

    if(n<=arr.length){

        for(let i = 0; i<n; i++){
            console.log(arr[arr.length - 1 - i])
        }
    }
    else{
        console.log(n + " to elements he nahi hai")
    }
}

// retrieve([1,2,3,4,5],7) 7 to elements he nahi hai
retrieve([1,2,3,4,5],4) // 5 4 3 2 