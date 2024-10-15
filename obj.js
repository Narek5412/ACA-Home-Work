function change(obj){
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
