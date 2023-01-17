const majorityElement = function (nums) {
    let uniqueArr = Array.from(new Set(nums))
    let mostMajority = 0;
    let response = 0
    for (let i = 0; i < uniqueArr.length; i++) {
        const mostMajorityArr = nums.filter((el) => el === uniqueArr[i])
        if (mostMajorityArr.length > mostMajority) {
            mostMajority = mostMajorityArr.length
            response = uniqueArr[i]
        }
    }
    return response;
};

majorityElement([3, 2, 3])
majorityElement([2, 2, 1, 1, 1, 2, 2])
majorityElement([6,5,5])
