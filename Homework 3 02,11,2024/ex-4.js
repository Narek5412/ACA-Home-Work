/*Given an array. Write a recursive function that removes the first element and returns the
given array. (without using arr.shift())
              Input                         Output
         [6, 78, ‘n’, 0, 1]              [78, ‘n’, 0, 1]
         [5]                             []
         []                              []
 */
function customShift(arr,newArr =[...arr]){
    if(arr.length === 0){
        return arr;
    } else if(newArr.length === arr.length-1){
        return newArr;
    }
return customShift(arr,newArr.slice(1));
}console.log(customShift([6, 78, 'n', 0, 1]))
console.log(customShift([5]))
console.log(customShift([]));