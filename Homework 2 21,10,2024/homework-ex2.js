function calculatorOfDivide(n){
    let sumOfDivide=1;
    let num = true
    for(let i=3;i<=n;i= i + 2) {
        if (num === true) {
            sumOfDivide += 1 / i
            num = false
        } else {
            sumOfDivide -= 1 / i
            num = true
        }
    }return  sumOfDivide
}console.log(calculatorOfDivide(9));