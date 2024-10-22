function calculatorOfDivide(n){
    //if we want to solve a problem with string
    let sumOfDivide="1";
    for(let i=3;i<=n;i= i + 2){
        sumOfDivide += ` - 1/${i} ` ;
    }return sumOfDivide;
}console.log(calculatorOfDivide(9));
function calculatorOfDivide1(n){
    //if we want to solve a problem with number
    let sumOfDivide1=1;
    for(let i=3;i<=n;i= i + 2){
        sumOfDivide1 -= 1/i ;
    }return sumOfDivide1;
}console.log(calculatorOfDivide1(8));