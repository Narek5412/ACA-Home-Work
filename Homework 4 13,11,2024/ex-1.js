/**Given an object. Write a recursive function that creates a deep copy of it. (Note:
 Without additional param).
 Input                                             Output
 var a = { a: ‘1’, b: { a: 2} };
 var b = deepCopy(a);                                       true
 a.b.a = 123;
 console.log(b.b.a !== 123);
 */

function deepCopy(object) {
    let obj = {}
    for (let i = 0; i < Object.entries(object).length; i++) {
        if (typeof (object[Object.keys(object)[i]]) === "object") {
            obj[Object.keys(object)[i]] = deepCopy(Object.values(object)[i])
        } else {
            obj[Object.keys(object)[i]] = Object.values(object)[i]
        }
    }return obj

}
var a = { a: '1', b: { a: 2 } };
var b = deepCopy(a);
a.b.a = 123;
console.log(b.b.a !== 123);
