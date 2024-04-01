const average = function (salary) {
    let total = 0
    for (let i = 0; i < salary.length; i++) {
        total += salary[i]
    }
    const max = Math.max(...salary)
    const min = Math.min(...salary)
    return ((total-max-min)/(salary.length-2)).toFixed(5)
};

console.log(average([4000, 3000, 1000, 2000]))
console.log(average([1000, 2000, 3000]))
console.log(average([8000, 9000, 2000, 3000, 6000, 1000]))