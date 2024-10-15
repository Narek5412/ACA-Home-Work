function printX(n){
    const arr = [];
    const rowLength = n * 2 - 1;
    for(let i = 0; i < n; i++){
        let str = '';
        for(let j = 0; j < rowLength; j++){
            if(j === i || j === rowLength - 1 - i){
                str += '*';
            } else {
                str += ' ';
            }
        }
        arr.push(str);
    }
 return  arr.slice(0,arr.length - 1).concat(([...arr].reverse()));


}console.log(printX(4));