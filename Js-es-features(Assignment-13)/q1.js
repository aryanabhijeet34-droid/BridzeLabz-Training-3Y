
"use strict";

const apiData = [
    "25", "true", "false", "NaN", " ",
    "100px", "3.14", null, undefined
];

const validNumbers = [];
const invalidNumbers = [];

for (const value of apiData) {
    const num = Number(value);

    if (
        value === null ||
        value === undefined ||
        (typeof value === "string" &&
            (value.trim() === "" || !Number.isFinite(num)))
    ) {
        invalidNumbers.push(value);
    } else if (!Number.isFinite(num)) {
        invalidNumbers.push(value);
    } else {
        validNumbers.push(num);
    }

    console.log(
        `Original: ${String(value)}, ` +
        `Number: ${num}, ` +
        `Boolean: ${Boolean(value)}, ` +
        `String: ${String(value)}`
    );
}

console.log("\nValid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);

console.log("\nDetailed Report:");
for (const value of apiData) {
    const num = Number(value);
    const valid = value !== null &&
        value !== undefined &&
        !(typeof value === "string" && value.trim() === "") &&
        Number.isFinite(num);

    console.log(
        `${valid ? "[VALID]" : "[INVALID]"} ${String(value)}`
    );
}
