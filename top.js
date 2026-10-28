// Программист 2 (Анна): студент с максимальным баллом.
function findTopStudent(data) {
    if (data.length === 0) {
        return null;
    }
    return data.reduce((best, student) => (student.score > best.score ? student : best)).name;
}

module.exports = { findTopStudent };
