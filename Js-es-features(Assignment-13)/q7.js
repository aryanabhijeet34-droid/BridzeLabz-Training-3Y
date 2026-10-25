
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Invalid operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "subtract":
            return a - b;

        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;

        case "power":
            return a ** b;

        case "root":
            if (a < 0) {
                throw new Error("Cannot find real root of a negative number");
            }
            return Math.sqrt(a);

        default:
            throw new InvalidOperationError(operation);
    }
}

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation}: ${error.name} - ${error.message}`);
    }
}
