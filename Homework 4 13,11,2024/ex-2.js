/**Write recursive function range(x,y) to get the integers in range (x,y) where x and
 y are also integers. For example if x = 5 and y = 10 output will be [6, 7, 8, 9].
 (Note: Without using additional param).
 */

/**if i use unshift*/
// function range(x, y) {
//     if (x + 1 >= y ) {
//         return [];
//     }
//     let result = range(x + 1, y);
//     result.unshift(x + 1);
//     return result;
// }
//
// console.log(range(5, 10));

function range(x,y){
    if(x + 1 >= y){
        return [];
    }
    let result = [ x +1,...range(x + 1, y)];
    console.log(result)
    return result
}
console.log(range(5, 10));
