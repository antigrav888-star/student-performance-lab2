// Тимлид: сборка результатов работы команды.
const { grades } = require("./data");
const { calculateAverage } = require("./average");
const { findTopStudent } = require("./top");
const { filterFailed } = require("./failed");
const { addLetterGrade } = require("./letters");

const PASS_SCORE = 60;

console.log("=== Анализ успеваемости группы ===");
console.log("Средний балл группы →", calculateAverage(grades).toFixed(2));
console.log("Лучший студент      →", findTopStudent(grades));
console.log("Не сдали (<" + PASS_SCORE + ")     →", filterFailed(grades, PASS_SCORE));
console.log("\nИтоговые оценки:");
for (const student of addLetterGrade(grades)) {
    console.log(`  ${student.name.padEnd(12)} ${String(student.score).padStart(3)}  →  ${student.letter}`);
}
