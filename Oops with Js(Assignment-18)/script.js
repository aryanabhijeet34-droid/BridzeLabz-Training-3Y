
class Student {

    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Calculate average using reduce()
    calculateAverage() {

        let total = this.marks.reduce(
            (sum, mark) => sum + mark, 0
        );

        return total / this.marks.length;
    }

    // Calculate grade
    getGrade() {

        let average = this.calculateAverage();

        if (average >= 80) {
            return "A";
        }
        else if (average >= 60) {
            return "B";
        }
        else if (average >= 40) {
            return "C";
        }
        else {
            return "F";
        }
    }
}


// Creating 3 students
let student1 = new Student("Aryan", [85, 90, 80, 95]);

let student2 = new Student("Rahul", [65, 70, 60, 75]);

let student3 = new Student("Aman", [30, 35, 25, 40]);


function showResults() {

    let students = [student1, student2, student3];

    let output = "";

    students.forEach(student => {

        output += "Name: " + student.name + "\n";

        output += "Marks: " + student.marks + "\n";

        output += "Average: " +
                  student.calculateAverage() + "\n";

        output += "Grade: " + student.getGrade() + "\n";

        output += "----------------------\n";

    });

    document.getElementById("output").textContent = output;
}
