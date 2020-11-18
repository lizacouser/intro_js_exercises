/* 
Use map and filter to first determine 
the lengths of all the elements in an 
array of string values, then discard 
the even values (keep the odd values).
*/

//map will make an array of lengths
//filter will find the odd values

let oddLengths = arr => {
  let lengthArray = arr.map(str => str.length);
  let oddLengthArray = lengthArray.filter(num => num % 2 === 1);
  return oddLengthArray;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

