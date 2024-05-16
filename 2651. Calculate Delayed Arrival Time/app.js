const findDelayedArrivalTime = function (arrivalTime, delayedTime) {
    if (arrivalTime + delayedTime === 24) {
        return 0
    }
    return (arrivalTime + delayedTime) % 24
};

console.log(findDelayedArrivalTime(15, 5))
console.log(findDelayedArrivalTime(13, 11))
console.log(findDelayedArrivalTime(1, 24))
console.log(findDelayedArrivalTime(23, 24))