/* 
Use reduce to compute the sum of the squares 
of all of the numbers in an array:
*/

let sumOfSquares = arr => {
  return arr.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue * currentValue;
  }, 0);
}


let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83