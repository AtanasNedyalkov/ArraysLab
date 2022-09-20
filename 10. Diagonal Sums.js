function diagonalSum(input){
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = input[0].length - 1;
    input.forEach(array => {
        firstDiagonal+=Number(array[firstIndex++])
        secondDiagonal+=Number(array[secondIndex--])
    });
    console.log(Number(firstDiagonal) + ' ' + Number(secondDiagonal))
}
diagonalSum([['2', '3', '4', '7'],
             ['4', '0', '5', '3'],
             ['2', '3', '5', '4'],
             ['9', '8', '7', '5']])