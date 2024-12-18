let obj = {
    from: 1,
    to: 10
}
obj[Symbol.iterator]=function() {
    return {
        from: this.from,
        to: this.to,
        next() {
            if(this.from <= this.to) {
                return {
                    value: this.from++,
                    done: false
                }
            }
                return{
                    done: true
                }

        }
    }
}
for(let elem of obj){
    console.log(`elem is ${elem}`)
}

// let arr = [1,2,3,4,5,6,7]
// arr[Symbol.iterator] = function(){
//     return {
//         index: 0,
//         arr: this,
//          next() {
//             if(this.index < this.arr.length){
//                 const result = {
//                     value: this.arr[this.index],
//                     done: false
//                 }
//                 this.index += 2;
//                 return result;
//             }else {
//                 return{
//                     done: true
//                 }
//             }
//
//         }
//     }
// }
// for(let elem of arr){
//         console.log(elem)
// }
// function customArrayFrom(obj){
//     let arr = []
//     for(let i =0; i<obj.length; i++){
//        arr.push(obj[i]);
//     }return arr
// }console.log(customArrayFrom( arrayLike = {
//     0: 1,
//     3: 2,
//     10: 20,
//     20: 4,
//     length: 3
// }))






