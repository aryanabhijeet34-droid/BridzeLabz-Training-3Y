
function runExample() {

    const user = {
        name: "Aryan",

        showName: () => {
            return this.name;
        }
    };

    const user2 = {
        name: "Aryan",

        showName: function() {
            return this.name;
        }
    };

    let output = "";

    output += "Using Arrow Function:\n";
    output += user.showName() + "\n\n";

    output += "Using Normal Function:\n";
    output += user2.showName();

    document.getElementById("output").textContent = output;
}
