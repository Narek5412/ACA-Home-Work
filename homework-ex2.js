//Given an array of numbers. Find the maximum and minimum elements in array.
//Calculate their difference and check is there such an element in the array or not.
function array(arr){
arr.sort((a,b)=>a-b);
let val = arr[arr.length-1] - arr[0]
    if(arr.indexOf(val)>0){
        return true
    }else{
        return false
    }
}console.log(array([1, 10, 2, 9, 2, 3, 9, 4]))
console.log(array([1, 4, -43, 12]))