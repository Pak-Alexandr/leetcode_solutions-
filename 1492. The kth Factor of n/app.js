const kthFactor = function(n, k) {
    let factorsList = []
    for(let i = 1; i <= n; i++){
        if (n%i==0){
            factorsList.push(i)
        }
    }
    if(factorsList.length < k){
        return -1
    }
    return factorsList[k-1]
};

console.log(kthFactor(12,3))
console.log(kthFactor(7,2))
console.log(kthFactor(4,4))