const numberOfPoints = function (nums) {
    const response = []
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i][0]
        let y = nums [i][1]
        for (let j = 0; j <= y - x; j++) {
            if (!response.includes(x + j)) {
                response.push(x + j)
            }
        }
    }
    return response.length
};

console.log(numberOfPoints([[3, 6], [1, 5], [4, 7]]))
console.log(numberOfPoints([[1, 3], [5, 8]]))