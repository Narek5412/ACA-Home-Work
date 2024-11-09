/*Given an array and a number N. Write a recursive function that rotates an array N
places to the left. (Hint: to add element to the beginning use arr.unshift())
[‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’] 3     -->     [‘d’, ‘e’, ‘f’, ‘g’, ‘h’, ‘a’, ‘b’, ‘c’]
[‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’] -2    -->     [‘g’, ‘h’, ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’]
 */function rotates(arr,count,i= 0,newArr = []){
     if (count > arr.length ){
         count -= arr.length
     }else if(count < -arr.length){
         count += arr.length
     }
     if(count < 0 && i === arr.length + count){
         return newArr;
     } else if(i === count){
     return newArr;
}else if(i === 0){
      newArr= arr.slice(count,arr.length);
      newArr.push(arr[i]);
}else{
     newArr.push(arr[i]);
}

     return rotates(arr,count,i+1,newArr);
}console.log(rotates(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3 ))
console.log(rotates(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] ,-2))
console.log(rotates(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 11 ))
console.log(rotates(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] ,-10))
