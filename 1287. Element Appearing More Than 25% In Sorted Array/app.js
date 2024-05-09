const findSpecialInteger = function (arr) {
    let uniqArr = {}
    let result = {param: 0, value: 0}
    for (let i = 0; i < arr.length; i++) {
        if (!uniqArr[arr[i]]) {
            uniqArr[arr[i]] = 1
        } else {
            uniqArr[Number(arr[i])]++
        }
    }
    for (let prop in uniqArr) {
        let value = uniqArr[prop]
        if (value > result.value) {
            result.param = prop
            result.value = value
        }
    }
    return result.param
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]))
console.log(findSpecialInteger([1, 1]))
console.log(findSpecialInteger([1]))
console.log(findSpecialInteger([15, 15, 21, 21, 32, 32, 33, 33, 33, 34, 35]))