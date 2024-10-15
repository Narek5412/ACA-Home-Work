function prime(num) {
    let arr =[]
for(let i = 0; i <= num; i++) {
    if(num % i === 0 ){
        arr.push(i)
    }
}let newArr = []

for(let j = 0; j < arr.length; j++){

    for(let k = 2; k < num; k++){
    if(arr[j] % k === 0 && arr[j] !== k){
        break
    }else if(k === num-1) {
        newArr.push(arr[j]);
          }
    }
}console.log(arr)
return newArr
}console.log(prime(30));