function test (nums1,nums2){
	const newArr = nums1.concat(nums2);
	newArr.sort(function (a,b){
		return a-b;
	});
	if(newArr.length % 2 === 0){
	return ((newArr[newArr.length/2]+newArr[(newArr.length/2)-1])/2)
	} else{
		return ( newArr[Math.floor(newArr.length/2) ])
	}
}
