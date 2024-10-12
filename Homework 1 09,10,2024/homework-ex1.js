//Given a number n ( n &gt; 0 ). Print Fibonacci series up to n.

function number(num){
let arr = [0,1];
for(let i=0;arr[i]+arr[i+1]<=num;i++){
arr.push(arr[i]+arr[i+1]);
}return arr.join(",")
} console.log(number(5))
console.log(number(45))
