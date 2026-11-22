
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}

function runOperation() {

    let numbers = [1, 2, 3, 4];

    let doubled = applyOperation(numbers, double);

    let squared = applyOperation(numbers, square);

    document.getElementById("output").innerHTML =
        "Original Array: " + numbers +
        "<br>Doubled Array: " + doubled +
        "<br>Squared Array: " + squared;
}
