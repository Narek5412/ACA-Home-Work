/**Write recursive function range(x,y) to get the integers in range (x,y) where x and
 y are also integers. For example if x = 5 and y = 10 output will be [6, 7, 8, 9].
 (Note: Without using additional param).
 */
function range(x, y) {
    if (x + 1 >= y) {
        return [];
    }
    let result = range(x + 1, y);
    result.unshift(x);
    return result;
}

console.log(range(5, 10));