let repeat = (repetitions, str) => {
  let repeatedString = '';
  for(let count = 0; count < repetitions; count ++) {
    repeatedString += str;
  }
  return repeatedString;
}

console.log(repeat(3, 'ha'));

/* 
proposed solution:

function repeat(n, string) {
  let repetitions = '';

  while (n > 0) {
    repetitions += string;
    n -= 1;
  }

  return repetitions;
}

*/