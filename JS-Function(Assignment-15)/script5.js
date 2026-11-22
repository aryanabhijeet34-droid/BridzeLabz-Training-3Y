
// Parent Constructor
function Person(name) {
    this.name = name;
}

// Parent Prototype Method
Person.prototype.showName = function() {
    return "Name: " + this.name;
};


// Child Constructor
function Student(name, branch) {

    Person.call(this, name);

    this.branch = branch;
}

// Inheritance
Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;


// Child Prototype Method
Student.prototype.showDetails = function() {

    return this.showName() +
           "\nBranch: " + this.branch;

};


// Creating Student Object
let student1 = new Student("Aryan", "Computer Science");


function showStudent() {

    let output = "";

    output += student1.showDetails();

    output += "\n\nPrototype Chain:\n";

    output += "Student -> Person -> Object -> null";

    output += "\n\nInheritance: ";

    output += Person.prototype.isPrototypeOf(student1);

    document.getElementById("output").textContent = output;
}
