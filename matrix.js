function array(matrix){
    let newMatrix = [];
    for(let i=0; i < matrix[0].length; i++){
        newMatrix[i] = [];
        for(let j = 0; j < matrix.length; j++){
            newMatrix[i][j]=matrix[matrix.length-1-j][i];
        }
    }return newMatrix;
}console.log(array([[0,1,0,3],
                           [0,1,1,3],
                           [1,0,1,3]]))