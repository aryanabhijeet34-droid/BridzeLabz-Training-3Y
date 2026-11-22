
// Parent Class
class Employee {

    constructor(name, department) {

        this.name = name;

        this.department = department;

    }

    work() {

        return this.name + " is doing general employee work.";

    }

}


// Child Class
class Manager extends Employee {

    constructor(name, department) {

        super(name, department);

    }

    // Overriding parent method
    work() {

        return this.name + " is managing the " +
               this.department + " department.";

    }

}


// Creating Objects
let emp1 = new Employee("Rahul", "IT");

let emp2 = new Manager("Aryan", "Development");


function showEmployees() {

    let employees = [emp1, emp2];

    let output = "";

    employees.forEach(employee => {

        output += "Name: " + employee.name + "\n";

        output += "Department: " + employee.department + "\n";

        output += "Work: " + employee.work() + "\n";

        output += "-----------------------\n";

    });

    document.getElementById("output").textContent = output;
}
