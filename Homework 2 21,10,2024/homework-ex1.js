function isNumberPrime(num){
for(let i= 2;i<=num ;i++){
    if(num % i === 0 && num !== i){
        return false
    }else if( i === num){
        return true
    }
}
}console.log(isNumberPrime(401))
console.log(isNumberPrime(56))
console.log(isNumberPrime(63))