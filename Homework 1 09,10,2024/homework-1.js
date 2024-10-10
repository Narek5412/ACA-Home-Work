function transformNumber(num){
    let countOfZeros = 0;
    let isLastNumberZero = false;
    let newNum = 0;
    let multiply = 0;
    while(num > 0) {
        if (num % 10 !== 0) {
            newNum += (num % 10 * (10 ** (multiply)));
            num = (num - (num % 10)) / 10;
            multiply++;
        } else if (num % 10 === 0) {
            if(isLastNumberZero === false){
                isLastNumberZero = true;
                num /= 10;
                countOfZeros++;
                multiply ++;
            }else{
                num /= 10;
                countOfZeros++;
            }
        }
    }if(countOfZeros === 0 || countOfZeros === 1){
        return "Nothing";
    }
    return newNum;
}console.log(transformNumber(120034013))