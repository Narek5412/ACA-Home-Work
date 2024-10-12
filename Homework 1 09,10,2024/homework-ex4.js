//Given an array of strings. Find the strings with maximum and minimum lengths in array.
// Print the sum of their lengths.
function lengthSum(arr){
    if(arr.length === 0){
        return 0;
    }
    let long = 0;
    let short = arr[0].length
for(let i=0;i<arr.length;i++){
if(arr[i].length > long){
    long = arr[i].length;
}else if(short > arr[i].length){
    short = arr[i].length
}
}return long+short
}console.log(lengthSum(["anymore", "raven", "me", "communicate"]))
console.log(lengthSum(["wish", "slightly", "understand", "longer",
"unexpected", "heart"]))
console.log(lengthSum([]))