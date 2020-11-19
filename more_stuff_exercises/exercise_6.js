/* 
Write a function that searches an array 
of strings for every element that matches 
the regular expression given by its 
argument. The function should return all 
matching elements in an array.
*/

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let allMatches = (arr, regex) => {
  let matches = [];
  arr.forEach(str => {
    if (regex.test(str)) {
      matches.push(str);
    }
  })
  return matches;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

/* 
Proposed solution:

function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

*/