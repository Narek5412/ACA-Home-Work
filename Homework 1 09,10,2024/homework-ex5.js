//Given a sentence with missing words and an array of words. Replace all ‘_’ in a
//sentence with the words from the array.
function missingWords(str,arr){
    let strArr = str.split("");
    let j = 0
    for(let i=0;i  < strArr.length;i++){
        if(strArr[i] === "_" && j === arr.length){
            continue
        }
       else if(strArr[i] === "_"){
           strArr[i]=arr[j];
           j++;
       }
    }return strArr.join("")

}console.log(missingWords("_, we have a _.",
["Houston", "problem"]))
console.log(missingWords("If at _ you don’t _, try, try _.",
["first", "succeed", "again"]))
console.log(missingWords("May the _ _ _ _.",
["Force", "be", "with", "you"]))
console.log(missingWords("_bc_de", ["a"]))