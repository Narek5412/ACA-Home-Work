function transferString(string){
    let str = ""
    for (let i = 0; i < string.length-string.length % 3; i++) {
        if((i+3) % 3 === 0){
            str += string[i +1] + string[i + 2] + string[i]
        }
    }return str + string.slice(string.length-string.length % 3,string.length)
}console.log(transferString("dfgjkloyp"));
console.log(transferString("aweyoolp"));