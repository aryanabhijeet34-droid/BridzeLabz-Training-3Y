
// Parent Class
class User {

    constructor(name, rating) {

        this.name = name;

        this.rating = rating;

    }

}


// Child Class
class Driver extends User {

    constructor(name, rating, vehicle, vehicleNumber) {

        super(name, rating);

        this.vehicle = vehicle;

        this.vehicleNumber = vehicleNumber;

    }

}


// Trip Class
class Trip {

    constructor(fromLocation, toLocation, distance) {

        this.fromLocation = fromLocation;

        this.toLocation = toLocation;

        this.distance = distance;

    }

    calculateFare() {

        // Error handling for invalid distance
        if (
            this.distance === undefined ||
            this.distance === null ||
            this.distance === "" ||
            !Number.isFinite(this.distance) ||
            this.distance < 0
        ) {

            throw new Error("Invalid distance! Please enter a valid distance.");

        }

        // Fare calculation
        let farePerKm = 15;

        let fare = this.distance * farePerKm;

        return fare;

    }

}


// Creating Driver
let driver1 = new Driver(
    "Aryan",
    4.8,
    "Swift Dzire",
    "UP85AB1234"
);


// Creating Trip
let trip1 = new Trip("Mathura", "Agra", 60);


// Booking Ride
function bookRide() {

    let output = "";

    try {

        output += "Driver Details\n";

        output += "Name: " + driver1.name + "\n";

        output += "Rating: " + driver1.rating + "\n";

        output += "Vehicle: " + driver1.vehicle + "\n";

        output += "Vehicle Number: " +
                  driver1.vehicleNumber + "\n\n";


        output += "Trip Details\n";

        output += "From: " + trip1.fromLocation + "\n";

        output += "To: " + trip1.toLocation + "\n";

        output += "Distance: " + trip1.distance + " KM\n";


        let fare = trip1.calculateFare();

        output += "Total Fare: Rs. " + fare;

    }

    catch(error) {

        output += "\nError: " + error.message;

    }

    document.getElementById("output").textContent = output;

}
