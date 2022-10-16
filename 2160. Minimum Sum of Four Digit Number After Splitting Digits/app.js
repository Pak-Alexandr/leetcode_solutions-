var minimumSum = function (num) {
  const arr = num.toString().split("");
  const newArr = [];
  const newArr1 = [];
  const newArr2 = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Number(arr[i]));
  }
  newArr1.push(Math.min.apply(Math, newArr));
  newArr.splice(newArr.indexOf(Math.min.apply(Math, newArr)), 1);
  newArr2.push(Math.min.apply(Math, newArr));
  newArr.splice(newArr.indexOf(Math.min.apply(Math, newArr)), 1);
  newArr1.push(newArr[0]);
  newArr2.push(newArr[1]);
  let new1 = Number(newArr1.join(""));
  let new2 = Number(newArr2.join(""));
  return new1 + new2;
};
