//Given an array of numbers, padding amount and repeat count. Pad the array in the
//following way: the padding amount specifies how many elements should be taken from
//the array edges, the repeat amount specifies how many times the pad should be
//repeated. Also, you should check that padding amount &lt;= length of array.
function repeatAndAdd(arr,paddingAmount,repeat){
    let newArr =arr.slice(0,arr.length);
if(paddingAmount > arr.length){
    return "Invalid padding amount";
}
for(let i=0; i<repeat; i++){
    for(let j=0; j<paddingAmount; j++){
        newArr.unshift(arr[j]);
        newArr.push(arr[(arr.length-1)-j]);
    }
}return newArr;
}console.log(repeatAndAdd([1, 2, 3, 4],1,3));
console.log(repeatAndAdd([1, 2, 3, 4],2,1));
console.log(repeatAndAdd([1],1,3));
console.log(repeatAndAdd([1],2,3));