let scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
let passed = scores.filter(score => score >= 50);
let updatedScores = scores.map(score => score);

console.log(`Q4. Array Performance Analyzer
Scores: ${updatedScores.join(", ")}
Highest Score: ${highest}
Lowest Score: ${lowest}
Average Score: ${average.toFixed(2)}
Students Passed: ${passed.length}
Students Failed: ${scores.length - passed.length}
`);