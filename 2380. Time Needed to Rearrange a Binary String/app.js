const secondsToRemoveOccurrences = function (s) {
    let newString = s
    let secondsCounter = 0
    while (newString.includes('01') === true) {
        for (let i = 0; i < s.length; i++) {
            if (newString[i] === '0' && newString[i + 1] === '1') {
                newString = newString.substring(0, i) + '1' + newString.substring(i + 1)
                newString = newString.substring(0, i + 1) + '0' + newString.substring(i + 2)
                i++
            }
        }
        secondsCounter++
    }
    return secondsCounter
};

console.log(secondsToRemoveOccurrences("0110101"))
console.log(secondsToRemoveOccurrences("11100"))