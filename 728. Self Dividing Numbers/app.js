/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function (left, right) {
    const response = []
    for (let i = left; i <= right; i++) {
        const number = i;
        let state = true;
        for (let j = 0; j < number.toString().length; j++) {
            state *= number % Number(number.toString()[j]) === 0
        }
        if (state === 1) {
            response.push(number)
        }
    }
    console.log (Array.from(new Set(response)))
};

selfDividingNumbers(1, 22)
selfDividingNumbers(47, 85)