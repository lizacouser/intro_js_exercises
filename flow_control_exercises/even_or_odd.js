let evenOrOdd = (number) => {
  if(typeof number === 'number'){
    if(number % 2) {
      return 'odd';
    } else {
      return 'even';
    }
  } else {
    return 'Not a number'
  }
}

console.log(evenOrOdd('hello'));

/* 
proposed solution:

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

*/