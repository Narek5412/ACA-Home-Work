/*
Given an array of numbers. Write a recursive function to find its minimal positive
element. (if such element does not exist, return -1)․

        Input                            Output
 [56, -9, 87, -23, 0, -105, 55, 1]          0
 [45, -9, 15, 5, -78]                       5
 [-5, -9, -111, -1000, -7]                 -1
 */
function findMinPositiveElem(arr,i = 0,minPos){
    if(i === arr.length && minPos < 0){
        return -1
    } else if(i === arr.length){
        return minPos
    } else if((minPos > arr[i] && arr[i] >= 0)|| minPos === undefined){
        minPos = arr[i]
    }
    return findMinPositiveElem(arr,i+1,minPos);
}console.log(findMinPositiveElem([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(findMinPositiveElem([45, -9, 15, 5, -78]))
console.log(findMinPositiveElem([-5, -9, -111, -1000, -7]));
