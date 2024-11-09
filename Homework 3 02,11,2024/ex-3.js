/*Given an array of numbers which is almost sorted in ascending order. Find the index
where sorting order is violated.
           Input                           Output
    [2, 12, 15, 48, 64]                      -1
    [-9, -4, -4, 3, 12, 4, 5]                 5
 */
function findIndexOfViolations(arr,i = 0) {
    if(i === arr.length){
        return -1
    }else if(arr[i]>arr[i + 1]){
        return i+1
    }
    return findIndexOfViolations(arr,i + 1);
}console.log(findIndexOfViolations([-9, -4, -4, 3, 12, 4, 5]));
console.log(findIndexOfViolations([2, 12, 15, 48, 64]))
console.log(findIndexOfViolations([1,4,9,4]))
