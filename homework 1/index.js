function transformNumberToString(number){
    let str ="";
    let num = number
    for(let i = 1;i<=number;i = i*10){
       if((num % 10) % 2 === 0 && str[0] % 2=== 0){
           str = (num % 10 + "-") + str;
           num = (num - (num % 10))/10
       }else{
           str = (num % 10) + str;
           num = (num - (num % 10))/10
       }
    }return str;
}console.log(transformNumberToString(2614411))

function string(num) {
    let str = "";
    for (; num > 0; num = (num - (num % 10)) / 10) {
        str = ((num % 10) % 2 === 0 && str[0] % 2 === 0) ?
            (num % 10 + "-") + str : (num % 10) + str;
    }
    return str;
}

console.log(string(2614411))