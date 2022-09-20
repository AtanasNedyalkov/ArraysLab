function solve(matrix){
    let sum = 0;
    for(let row = 0; row<matrix.length; row++){
        let subMatrix = matrix[row];
       for(let col = 0 ; col<subMatrix.length ; col++){
        if (row < matrix.length-1) {
            if (matrix[row][col] == matrix[row + 1][col]) {
                sum++;
            }
        }
        if(col<matrix[row].length) {
            if (matrix[row][col] == matrix[row][col + 1]) {
                sum++;
            }
        }
    }
    }
    console.log(sum);
}
solve([['test', 'yes', 'yo', 'ho'],
       ['well', 'done', 'yo', '6'],
       ['not', 'done', 'yet', '5']])