/*function change(obj){
    const output = {};
    for (let key in obj) {
        let value = obj[key];
        if(output.hasOwnProperty(value)){
            if (Array.isArray(output[value])) {
                output[value].push(key);
            } else {
                output[value] = [output[value], key];
            }
        }else {
            output[value] = key;
        }
    }return output

}console.log(change(
{"": 1, a: 2, b: 1}
))
 */
let arr = [1,20,10,30,4];
arr.customMap = function (cb) {
    for (let i = 0; i < this.length; i++) {
        this[i] = cb(this[i],i,this);
    }return arr
};console.log(arr.customMap(elem => elem*2))