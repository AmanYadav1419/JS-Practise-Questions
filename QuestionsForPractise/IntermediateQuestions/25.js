// Prototypes :
// Create a prototype for a product objet with properties like Name,price and quantity. add a method to the product prototype to calculate the total value 

function Product(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.calculateTotalValue = function(){
    return this.price*this.quantity
}

const product1 = new Product("widget",10,5);
const totalValue1 = product1.calculateTotalValue();

// product 2
const product2 = new Product("gadget",30,8);
const totalValue2 = product2.calculateTotalValue();

console.log(Product.prototype) //{calculateTotalValue: ƒ, constructor: ƒ}

console.log(product1) //Product {name: 'widget', price: 10, quantity: 5}name: "widget"price: 10quantity: 5[[Prototype]]: Object

// console.log(product1.calculateTotalValue()); //50 and also one more solution 

// product 1 console below 
console.log(`Total Value of Product is ${product1.name}:$${totalValue1}`)

// product 2 console below
console.log(`Total Value of Product is ${product2.name}:$${totalValue2}`)