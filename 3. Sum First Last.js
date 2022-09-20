function solve(arr){
    let firstNumber = Number(arr.pop());
    let lastNumber = Number(arr.shift());
    let sum = firstNumber+lastNumber;
    console.log(sum);
}
solve(['20', '30', '40'])