/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 0) {
        return false
    } else {
        const response = ((Math.log(n) / Math.log(2)))
        return (Math.pow(2, Math.round(response)) === n)
    }
};

isPowerOfTwo(1)
isPowerOfTwo(16)
isPowerOfTwo(3)
isPowerOfTwo(536870912)
isPowerOfTwo(0)