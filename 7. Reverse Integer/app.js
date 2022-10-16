function reverse(x) {
    let y = String(x).split('')
    if (y[0] === '-') {
        y.shift()
        y.reverse()
        y.unshift('-')
    } else {
        y.reverse()
    }
    let z = Number(y.join(''))
    if (z > Math.pow(-2, 31) && z < (Math.pow(2, 31) - 1)) {
        return (z)
    } else {
        return (0)
    }
}


//tests
reverse(123) //321
reverse(-123) //-321
reverse(120) //21
reverse(1534236469)