const maximumSum = function (nums) {
    let result = new Map()
    let response = -1

    function sumOfDigits(num) {
        let newNum = num
        let sumOfDigit = 0
        for (let j = 0; j < String(num).length; j++) {
            sumOfDigit = sumOfDigit + (newNum % 10)
            newNum = Math.floor(newNum / 10)
        }
        return sumOfDigit
    }

    for (let i = 0; i < nums.length; i++) {
        let sum = sumOfDigits(nums[i])
        if (result.has(sum)) {
            let current = result.get(sum)
            let max = Math.max(current, nums[i])
            response = Math.max(response, nums[i] + current)
            result.set(sum, max)
        } else {
            result.set(sum, nums[i])
        }
    }
    return response
};

console.log(maximumSum([18, 43, 36, 13, 7]))
console.log(maximumSum([10, 12, 19, 14]))
console.log(maximumSum([4, 6, 10, 6]))

