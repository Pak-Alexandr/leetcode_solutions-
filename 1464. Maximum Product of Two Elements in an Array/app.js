const maxProduct = function (nums) {
    let result = 0

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1 + i; j < nums.length + 1; j++) {
            let valueOfProducts = (nums[i] - 1) * (nums[j] - 1)
            if (valueOfProducts > result) {
                result = valueOfProducts
            }
        }
    }
    return result
};

console.log(maxProduct([3, 4, 5, 2]))
console.log(maxProduct([1, 5, 4, 5]))
console.log(maxProduct([3, 7]))
console.log(maxProduct([1, 8, 5, 4, 10, 2, 6, 1, 1, 1, 9]))