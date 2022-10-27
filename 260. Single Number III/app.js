/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let dupNums = nums.filter((element, index) => {
        return nums.indexOf(element) !== index;
    });
    const result = nums.filter((num) => {
        if (!dupNums.includes(num)) {
            return num.toLocaleString()
        }
    })
    return result
};

singleNumber([1, 2, 1, 3, 2, 5])
singleNumber([-1, 0])
singleNumber([0, 1])