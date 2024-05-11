const countAndSay = function (n) {
    function runLengthEncoding(digit) {
        let result = ""
        let counter = 1
        for (let i = 0; i < digit.length; i++) {
            if (digit[i] === digit[i + 1]) {
                counter++
            } else {
                result = result + counter + digit[i]
                counter = 1
            }
        }
        return result
    }

    if (n === 1) {
        return "1"
    }
    if (n > 1) {
        let encodedDigit = "1"
        for (let i = 1; i < n; i++) {
            encodedDigit = runLengthEncoding(encodedDigit)
        }
        return encodedDigit
    }
};

console.log(countAndSay(4))
console.log(countAndSay(1))
console.log(countAndSay(6))
console.log(countAndSay(10))
console.log(countAndSay(9))



