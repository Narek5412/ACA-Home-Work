//Given an array of numbers. Find the maximum and minimum elements in array.
//Calculate their difference and check is there such an element in the array or not.
function array(arr){
let val = Math.max.apply(null, arr) - Math.min.apply(null, arr);
return arr.includes(val);
}console.log(array([1, 10, 2, 9, 2, 3, 9, 4]))
console.log(array([1, 4, -43, 12]))
console.log(array([10,5]))