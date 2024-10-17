function array(arr){
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        obj[key] = (obj[key] || 0) + 1;
    }console.log(obj);
    for(let key in obj){
       console.log(`${key}: ${obj[key]/arr.length}`);
    }
}console.log(array([1,3,4,2,3,]))

