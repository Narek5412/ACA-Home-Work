/**Given an array which element are integers in range (x, y) not including x and y
 where x and y are also integers. Write a function to sort array without any
 comparison.(Hint: Use Map).
 */
function customSort(arr, min, max) {
    let obj = {}
    for (let elem of arr) {
        obj[elem] = elem
    }
    let map = new Map()
    for (let key in obj) {
        if (key[0] !== "-") {
            map.set(key, obj[key]);
        }
    }
    let arrPositive = Array.from(map.values());
    let newObj = {}
    for (let elem of arr) {
        if (!map.has(`${elem}`)) {
            newObj[-1 * elem] = -1 * elem
        }
    }
    map.clear()
    for (let key in newObj) {
        map.set(-key, obj[-key]);
    }
    let arrNegative = Array.from(map.values()).reverse()
    return arrNegative.concat(arrPositive)
}

console.log(customSort([1, -3, 24, 5, -15, -4, 8, -24, 12, -8], -24, 24));