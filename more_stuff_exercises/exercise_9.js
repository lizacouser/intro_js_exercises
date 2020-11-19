/*

Without using Object.is, 
write a function that will 
return true if the argument 
is -0, and false if it is 0 
or any other number.

*/

let isNegativeZero = value => {
  return 1/value === -Infinity;
}

console.log(isNegativeZero(0));
console.log(isNegativeZero(-0));
console.log(isNegativeZero(0/0));
console.log(isNegativeZero('hello'));
