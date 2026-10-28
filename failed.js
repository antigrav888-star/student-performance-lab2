// Программист 3 (Даша): студенты с баллом ниже проходного.
function filterFailed(data, passScore) {
    return data.filter((student) => student.score < passScore).map((student) => student.name);
}

module.exports = { filterFailed };
