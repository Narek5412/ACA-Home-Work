/**Given an array which element are integers in range (x, y) not including x and y
 where x and y are also integers. Write a function to sort array without any
 comparison.(Hint: Use Map).
 */
function customSort(arr, min, max) {
    let sortedArr = []
   let map = new Map();
   for(let elem of arr) {
       if(map.has(elem)) {
       map.set(elem, map.get(elem)+1);
       }else{
           map.set(elem, 1)
       }
   }console.log(map)
    for (let i = min+1; i - max; i++) {
        let count = map.get(i);
        while (count ) {
            sortedArr.push(i);
            count--;
        }
    }

    return sortedArr;

}

console.log(customSort([1, -3, 24, 5, -15, -4, 8, -24, 12, -8], -24, 24));
console.log(customSort( [5,-10,3,-5,3],-10,5))