/*Given an array. Write a recursive function that removes the first element and returns the
given array. (without using arr.shift())
              Input                         Output
         [6, 78, ‘n’, 0, 1]              [78, ‘n’, 0, 1]
         [5]                             []
         []                              []
 */
function customShift(arr, i=0){
    if(arr.length === 0 || i === 1) {
        return arr;
    }
    return customShift(arr.slice(i+1,arr.length),i+1);

}console.log(customShift([6, 78, 'n', 0, 1]))
console.log(customShift([5]))
console.log(customShift([]));