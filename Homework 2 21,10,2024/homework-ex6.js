// if we use array
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
}console.log(array(5))
// if we don`t use array
function number(n) {
    let num = 0
    let result = '';
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                line += (i + 1);
              num  = i+1
            } else if (j <= i ) {
                num += n-j;
                line += ' ' + num;
            }
        }
        result += line + '\n';
    }
    return result;
}
console.log(number(6));
