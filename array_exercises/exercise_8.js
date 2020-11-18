/* 
Write a function similar to determine lengths
of array elements, then discard the even values
but don't use map or filter. Instead, try to 
use the reduce method.

*/

let oddLengths = arr => {
  return arr.reduce((accumulator, currentValue) => {
    if (currentValue.length % 2 === 1) {
      accumulator.push(currentValue.length);
    }
    return accumulator;
  }, [])
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]