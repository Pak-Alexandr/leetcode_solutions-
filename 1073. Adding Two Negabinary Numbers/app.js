function addNegabinary(arr1, arr2) {
    let carry = 0
    let result = []
    let i = arr1.length - 1
    let j = arr2.length - 1

    while (i >= 0 || j >= 0 || carry) {
        if (i >= 0) carry += arr1[i]
        if (j >= 0) carry += arr2[j]
        result.push(carry & 1)
        carry = -(carry >> 1)

        i--
        j--
    }

    while (result.length > 1 && result[result.length - 1] === 0) {
        result.pop()
    }

    return result.reverse()
}

addNegabinary([1, 1, 1, 1, 1], [1, 0, 1]);
addNegabinary([0], [0]);
addNegabinary([0], [1]);
addNegabinary([0], [1, 0]);
addNegabinary([0], [1, 1]);
