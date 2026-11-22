
function showEndMessage() {
    document.getElementById("output").innerHTML +=
        "<br>Welcome to the course!";
}

function greetUser(name, callback) {

    document.getElementById("output").innerHTML =
        "Hello " + name;

    callback();
}

function runGreeting() {
    greetUser("Aryan", showEndMessage);
}
