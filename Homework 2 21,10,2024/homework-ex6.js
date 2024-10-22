function array(n){
    let arr =[];
    for(let i= 0; i  < n ; i++){
        arr.push([])
        for(let j= 0; j < n;j++){
            if(arr[i].length === 0){
                arr[i].push(i + 1)
            } else if(arr[i].length < i+1){
             arr[i].push( arr[i][arr[i].length-1] +(n-j))
         }else if(arr[i].length === i+1){
                break
            }
        }
    }
    return arr
}console.log(array(6))