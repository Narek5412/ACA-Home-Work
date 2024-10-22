/*let arr = [1,20,10,30,4];
arr.customFilter = function() {
 const result = [];
 for (let i = 0; i < this.length; i++) {
  if (this[i] < 20) {
   result.push(this[i]);
  }
 }
 return result;
};console.log(arr.customFilter())

 */
let user = {
 name: "John",
 age: 32,
 sayHi: function f(){
  console.log(this.name);
  let arrowF = () =>{
   console.log(this.name)
  };arrowF()
 }
};user.sayHi();

