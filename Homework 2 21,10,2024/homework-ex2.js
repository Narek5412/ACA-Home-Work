function calculatorOfDivide(n){
    let sumOfDivide=1;
    let num = 1
    for(let i=3;i<=n;i= i + 2) {
        if (num % 2 === 0) {
            sumOfDivide += 1 / i
            num++
        } else {
            sumOfDivide -= 1 / i
            num++
        }
    }return  sumOfDivide
}console.log(calculatorOfDivide(9));