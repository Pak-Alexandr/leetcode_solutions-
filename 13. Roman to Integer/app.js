function test(s) {
	const arr = s.split('');
	const newArr = [];
	let response = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'I') {
			newArr.push(1)
		} else if (arr[i] === 'V') {
			newArr.push(5)
		} else if (arr[i] === 'X') {
			newArr.push(10)
		} else if (arr[i] === 'L') {
			newArr.push(50)
		} else if (arr[i] === 'C') {
			newArr.push(100)
		} else if (arr[i] === 'D') {
			newArr.push(500)
		} else if (arr[i] === 'M') {
			newArr.push(1000)
		}
	}
	const reversedArr = newArr.reverse();
	response += reversedArr[0];

	for (let j = 1; j < reversedArr.length; j++) {
		if (reversedArr[j] < reversedArr[j - 1]) {
			response -= reversedArr[j]
		} else {
			response += reversedArr[j]
		}
	}
	return response
}
