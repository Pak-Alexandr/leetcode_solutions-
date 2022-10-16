var addTwoNumbers = function (l1, l2) {
    let reverseL1 = parseInt(l1.reverse().join(''), 10);
    let reverseL2 = parseInt(l2.reverse().join(''), 10);
    let sum = reverseL1 + reverseL2;
    let response = sum.toString().split('').reverse();
    return response;
};
