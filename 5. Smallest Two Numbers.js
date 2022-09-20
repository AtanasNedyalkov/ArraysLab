function solve(arr){
    let sortedArr = arr.sort((a,b)=>(a-b));
    console.log(sortedArr[0] + ' ' + sortedArr[1])
}
solve([30, 15, 50, 5])
solve([3, 0, 10, 4, 7, 3])