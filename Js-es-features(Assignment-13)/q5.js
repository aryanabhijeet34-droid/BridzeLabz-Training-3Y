
"use strict";

// Fixed version
let score = 50;
let status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow function comparison
const announceArrow = () => {
    console.log("Arrow function started");
};

announceArrow();
