function sumOfArray(arr) {
    let newArr =[];
for(let i = 0; i < arr.length; i++) {
 newArr.push(arr[i].reduce((a,b) => a + b))
}return newArr;
}console.log(sumOfArray([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));
console.log(sumOfArray([[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]]));
console.log(sumOfArray([[1], [2], [3], [4]]));