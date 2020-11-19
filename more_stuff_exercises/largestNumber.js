/* 
Given a list of numbers, write some 
code to find and display the largest 
numeric value in the list.
*/


//my initial solution
let largestNum = arr => {
  return arr.reduce((largest, current) => {
    if (current > largest) {
      largest = current;
    }
    return largest;
  });
}

let list1 = [1, 6, 3, 2];
let list2 = [-1, -6, -3, -2];
let list3 = [2, 2];

console.log(largestNum(list1));
console.log(largestNum(list2));
console.log(largestNum(list3));

//proposed solution

console.log(Math.max(1, 6, 3, 2));      // => 6
console.log(Math.max(-1, -6, -3, -2));  // => -1
console.log(Math.max(2, 2));            // => 2