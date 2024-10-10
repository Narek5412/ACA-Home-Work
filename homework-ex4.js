//Given an array of strings. Find the strings with maximum and minimum lengths in array.
// Print the sum of their lengths.
function lengthSum(arr){
arr.sort((a, b) => a.length - b.length);
return arr[0].length + arr[arr.length-1].length;
}console.log(lengthSum(["anymore", "raven", "me", "communicate"]))
console.log(lengthSum(["wish", "slightly", "understand", "longer",
"unexpected", "heart"]))