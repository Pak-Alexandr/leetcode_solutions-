/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    const response = []
    if (original.length === m * n) {
        let row = []
        for (let i = 0; i < original.length; i++) {
            if (row.length === n) {
                response.push(row)
                row = []
            }
            row.push(original[i])
        }
        response.push(row)
        return (response)
    } else {
        return []
    }
};

construct2DArray([1, 2, 3, 4], 2, 2)
construct2DArray([1, 2, 3], 1, 3)
construct2DArray([1, 2], 1, 1)