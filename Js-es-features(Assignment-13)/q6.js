
"use strict";

const input = process.arg[2];
const rows = input === undefined ? 5 : Number(input);

if (!Number.isInteger(rows) || rows < 1 || rows > 100) {
    console.log("Enter a valid row count from 1 to 100.");
} else {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trim());
    }
}
