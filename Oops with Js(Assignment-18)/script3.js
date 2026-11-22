
// Constructor Function
function Product(name, price) {

    this.name = name;

    this.price = price;

}


// Prototype Method
Product.prototype.applyDiscount = function(percent) {

    let discount = (this.price * percent) / 100;

    let newPrice = this.price - discount;

    return newPrice;

};


// Creating 3 products
let product1 = new Product("Laptop", 50000);

let product2 = new Product("Mobile", 20000);

let product3 = new Product("Headphones", 5000);


function showProducts() {

    let output = "";

    // Applying different discounts
    output += "Product: " + product1.name + "\n";

    output += "Original Price: " + product1.price + "\n";

    output += "After 10% Discount: " +
              product1.applyDiscount(10) + "\n\n";


    output += "Product: " + product2.name + "\n";

    output += "Original Price: " + product2.price + "\n";

    output += "After 20% Discount: " +
              product2.applyDiscount(20) + "\n\n";


    output += "Product: " + product3.name + "\n";

    output += "Original Price: " + product3.price + "\n";

    output += "After 15% Discount: " +
              product3.applyDiscount(15);


    document.getElementById("output").textContent = output;
}
