let marks = [90, 85, 78, 88, 92];

let sum = 0;

for (let mark of marks) {
    sum += mark;
}

let averageMarks = sum / marks.length;
let percentage = (sum / (marks.length * 100)) * 100;

console.log("Q4. Academic Performance Evaluator");
console.log("Average: " + averageMarks.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

if (marks.some(mark => mark < 35)) {
    console.log("Detained");
} else if (percentage >= 85 && percentage <= 100) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
} else {
    console.log("Detained");
}