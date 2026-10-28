// Программист 4 (Макаренко): буквенная оценка для каждого студента.
function addLetterGrade(data) {
    return data.map((student) => {
        let letter = "C";
        if (student.score >= 90) {
            letter = "A";
        } else if (student.score >= 75) {
            letter = "B";
        }
        return { ...student, letter };
    });
}

module.exports = { addLetterGrade };
