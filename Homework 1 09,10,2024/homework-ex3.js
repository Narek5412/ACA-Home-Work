//Given an array of numbers. Find the index of the second maximum element.
function secondHighest(arr){
    let highest = arr[0];
    let highest2 = arr[1];
    if(highest2 > highest){
        highest = arr[1];
        highest2 = arr[0];
    }
for(let i= 2;i < arr.length;i++){
    if(arr[i] > highest){
        highest2 = highest;
        highest = arr[i];
    }else if(arr[i]<highest && arr[i]>highest2){
        highest2 = arr[i];
    }
} return arr.indexOf(highest2)
}console.log(secondHighest([23, -98, 0, -456, 12, 8]));
console.log(secondHighest([-60, 2, 43, -18, 5, -19, 36, 7, 56 ]));
console.log(secondHighest([-1,-5,-7]))
