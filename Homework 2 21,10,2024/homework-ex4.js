function squarePrint(height,row){
    let arr =[]

for(let i=0;i < height; i++){
    arr.push([]);
    let str = ""
    arr[i].push(str);
   while(arr[i][0].length < row * 3){
        if (i === 0 || i === height-1 || arr[i][0].length === 0 || arr[i][0].length === (row -1) * 3 ){
            arr[i][0] +=" * "
        }else {
            arr[i][0] +="   "
        }
    }
}return arr
}console.log(squarePrint(7,6));