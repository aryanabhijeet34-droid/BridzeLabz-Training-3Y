
let menu = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 100 },
    { name: "Pasta", price: 150 },
    { name: "Sandwich", price: 80 }
];


function calculateBill(orderItems) {

    // Get price list using map()
    let prices = orderItems.map(item => {

        let food = menu.find(
            menuItem => menuItem.name === item
        );

        if (!food) {
            throw new Error("Invalid food item: " + item);
        }

        return food.price;
    });

    // Calculate total using reduce()
    let total = prices.reduce(
        (sum, price) => sum + price, 0
    );

    return {
        prices: prices,
        total: total
    };
}


function calculateOrder() {

    let output = "";

    try {

        // Valid order
        let orderItems = ["Pizza", "Burger", "Pasta"];

        let bill = calculateBill(orderItems);

        output += "Ordered Items: " + orderItems + "\n";

        output += "Prices: " + bill.prices + "\n";

        output += "Total Bill: Rs. " + bill.total;

    }

    catch(error) {

        output = "Error: " + error.message;

    }

    document.getElementById("output").textContent = output;
}
