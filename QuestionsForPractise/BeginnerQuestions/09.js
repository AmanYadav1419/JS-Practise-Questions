// Objects

// Create an Object representing a car with properties like MediaKeyMessageEvent,model,and year. Add a method to the car Object to start the engine.

// in simply create Object and add method 

let car = {
    make:"TATA",
    model:"Harrier",
    year:2023
}
car.startEngine = function(){
    console.log("Engine Started ")
}
// console.log(car)
// console.log(car.startEngine);
car.startEngine();