const findRelativeRanks = function (score) {
    const sortedScore = score.slice().sort((a, b) => b - a)
    const objScore = new Map()
    for (let i = 0; i < sortedScore.length; i++) {
        if (i === 0) {
            objScore.set(sortedScore[0], "Gold Medal")
        } else if (i === 1) {
            objScore.set(sortedScore[1], "Silver Medal")
        } else if (i === 2) {
            objScore.set(sortedScore[2], "Bronze Medal")
        } else {
            objScore.set(sortedScore[i], i + 1)
        }
    }
    return score.map(item => {
        return String(objScore.get(item))
    })
};

console.log(findRelativeRanks([5, 4, 3, 2, 1]))
console.log(findRelativeRanks([10, 3, 8, 9, 4]))