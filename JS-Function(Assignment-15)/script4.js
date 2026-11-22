
function Car(brand, model) {

    this.brand = brand;
    this.model = model;

}

// Prototype method
Car.prototype.getDetails = function() {

    return "Brand: " + this.brand +
           ", Model: " + this.model;

};

// Creating objects
let car1 = new Car("Toyota", "Fortuner");

let car2 = new Car("BMW", "X5");


function showCars() {

    document.getElementById("output").innerHTML =
        car1.getDetails() +
        "<br>" +
        car2.getDetails() +
        "<br><br>Shared Method: " +
        (car1.getDetails === car2.getDetails);

}
