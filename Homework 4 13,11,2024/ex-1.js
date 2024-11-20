/**Given an object. Write a recursive function that creates a deep copy of it. (Note:
 Without additional param).
 Input                                             Output
 var a = { a: ‘1’, b: { a: 2} };
 var b = deepCopy(a);                                       true
 a.b.a = 123;
 console.log(b.b.a !== 123);
 */

function deepCopy(object) {
    let obj = Array.isArray(object) ? [] : {};
    for (let key of Object.keys(object)) {
        let value = object[key];
        if (typeof value === "object") {
            obj[key] = deepCopy(value);
        } else {
            obj[key] = value;
        }

    }
    return obj
}

let a = {a: '1', b: [10, 20]};
let b = deepCopy(a);
console.log(b);
a.b[0]= 123;
console.log(b.b[0] !== 123);

