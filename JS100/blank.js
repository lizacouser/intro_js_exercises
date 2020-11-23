//part one, return true if string is empty
let isBlank = str => !str

console.log(isBlank('mars'));
console.log(isBlank('  '));
console.log(isBlank(''));

//part 2, return true if string is empty or only contains whitespace

let isBlank2 = str => {
  let containsNoLetters = true
  for (let i = 0; i < str.length; i ++){
    if (str[i] !== " " && str[i]) {
      containsNoLetters= false;
    }
  }
  return containsNoLetters;
}

console.log(isBlank2('mars'));
console.log(isBlank2('  '));
console.log(isBlank2(''));

/*
BETTER SOLUTION

function isBlank(string) {
  return string.trim().length === 0;
}

The String.prototype.trim() method 
removes whitespaces from both ends of a string!!!


*/