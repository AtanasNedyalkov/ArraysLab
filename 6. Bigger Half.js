function solve(arr){
    arr.sort((a,b)=>a-b);
    let middle = arr.length/2;
    let result = arr.slice(middle);
    console.log(result);
  

}
solve([4, 7, 2, 5, 6])
