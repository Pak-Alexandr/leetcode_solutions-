const  maximumValue = function(strs) {
    let response = 0
    for(let i = 0; i < strs.length; i++){
        let length = 0
        if(isNaN(Number(strs[i]))){
            length = strs[i].length
        }
        else {
            length = Number(strs[i])
        }
        if(response< length){
            response = length
        }
    }
    return response;
};

console.log(maximumValue(["alic3","bob","3","4","00000"]))
console.log(maximumValue(["1","01","001","0001"]))