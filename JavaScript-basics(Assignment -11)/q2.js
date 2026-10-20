let name = "Aryan";
let age = 20;
let isStudent = true;
let skills = ["Java", "Python"];
let user = { city: "Mathura" };
let address = null;
let result;

let data = [
    { Label: "Name", Value: name, Type: typeof name },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Skills", Value: skills.join(", "), Type: Array.isArray(skills) ? "array" : typeof skills },
    { Label: "User", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Address", Value: address, Type: "null" },
    { Label: "Result", Value: result, Type: typeof result }
];

console.table(data);
