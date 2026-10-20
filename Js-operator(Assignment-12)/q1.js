let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000;

    if (isPermanent) {
        salary += bonus;
    }

    console.log(`Permanent: ${isPermanent}, Total Salary: ₹${salary}`);
}

calculateSalary(true);
calculateSalary(false);

console.log("Global Bonus:", bonus);