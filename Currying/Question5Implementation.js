// Currying in Javascript
// Question 5 - Manipulating DOM 

// for this we need to add a h1 tag to the html so that we can change or manipulate data

// so i added this to html :- <h1>Aman Yadav From TECO</h1>

function updateElementText(id){
    return function (content){
        document.querySelector("#" + id).textContent = content;
    };
}

const updateHeader = updateElementText("heading");

updateHeader("Hii Aman Yadav is Here")
// before this the text is Aman Yadav From TECO and after that 
// updateHeader is executed the text is :- Hii Aman Yadav is Here