// another example 

//global scope 
function subscribe(){
    var name = "Aman Yadav";
    // inner scope 2
    function displayname(){
        // inner scope
        alert(name);
    }
    displayname();
}
subscribe();

// it will still accesible in that the dissplayname is closure as it accessing name variable of another scope/function inside of his function 
// in other words closure gives you acess to an outer function's scope from an inner function 