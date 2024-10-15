function randomArray(arr) {
    let newArr=[]
    let val = Math.max.apply(null, arr);
    for(let i = 0; newArr.length < arr.length; i++) {
      let result =Math.ceil(Math.random()*val);

        while(newArr.length < arr.length){
          if(newArr.includes(result)){
              break;
          }else if(arr.includes(result)){
              newArr.push(result);
              break;
          }else{
              break
          }
      }
    }return newArr
}console.log(randomArray([1,2,3,4,5,6,7,8,9,20]));