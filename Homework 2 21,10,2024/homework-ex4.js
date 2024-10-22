function squarePrint(height,row){
    let arr =[]
for(let i=0;i < height; i++){
    arr.push([]);
    for(let j = 0;j < row; j++){
        if (i === 0 || i === height-1 || j === 0 || j === row-1 ){
            arr[i].push("*")
        }else {
            arr[i].push(" ")
        }
    }
}return arr
}console.log(squarePrint(7,6));