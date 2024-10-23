function squarePrint(height,row){
    let str = ""
for(let i=1;i <= height*row; i++){
        if (i<height || height*row-i<height || i%height === 1  ){
            str +=" * "
        }else if(i % height === 0){
            str +=" *\n"
        }else {
            str +="   "
        }
    }return str
}console.log(squarePrint(7,6));