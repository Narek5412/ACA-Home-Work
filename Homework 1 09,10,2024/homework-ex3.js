//Given an array of numbers. Find the index of the second maximum element.
function secondHighest(arr){
    let highest = 0;
    let highest2 = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>highest){
        highest2 = highest;
        highest = arr[i]
    }else if(arr[i]<highest && arr[i]>highest2){
        highest2 = arr[i]
    }
} return arr.indexOf(highest2)
}console.log(secondHighest([23, -98, 0, -456, 12, 8]));
console.log(secondHighest([-60, 2, 43, -18, 5, -19, 36, 7, 56 ]));
