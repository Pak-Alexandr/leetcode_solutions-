/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
const numSubarraysWithSum = function (nums, goal) {
    let goalResult = 0
    for (let i = 0; i < nums.length; i++) {
        let newNum = nums[i]
        if (newNum === goal) {
            goalResult++
        }
        for (let j = i + 1; j < nums.length; j++) {

            newNum += nums[j]
            if (newNum === goal) {
                goalResult++
            }
        }
    }
    return (goalResult)
};

numSubarraysWithSum([1, 0, 1, 0, 1], 2)
numSubarraysWithSum([0, 0, 0, 0, 0], 0)