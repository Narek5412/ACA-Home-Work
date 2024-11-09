/*Write a recursive function to determine whether all digits of the number are odd or not.
        Input             Output
        4211133           false
        7791              true
        5                 true
 */
function recursiveOdd(num){
    if(num<=0){
        return false
    } else if(num < 10 && num % 2 !== 0){
       return true
    }else if(num%2===0){
        return false
    }
    return recursiveOdd(Math.floor(num/10))
}console.log(recursiveOdd(4211133))
console.log(recursiveOdd(5))
console.log(recursiveOdd(7791))
