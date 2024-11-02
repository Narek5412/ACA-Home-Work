function isNumberPrime(num){
    if(num === 1){return "no"}
for(let i= 2;i<=num ;i++){
    if(num % i === 0 && num !== i){
        return "no";
    }else if( i === num){
        return "yes";
    }
}
}console.log(isNumberPrime(401))
console.log(isNumberPrime(56))
console.log(isNumberPrime(63))
console.log(isNumberPrime(1))