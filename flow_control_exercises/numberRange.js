let numberRange = (num) => {
  if (typeof num !== 'number'){
    console.log(num + ' is not a number...')
    return;
  }
  if (num < 0) {
    console.log(num + ' is less than 0.');
  } else if (num <= 50) {
    console.log(num + ' is between 0 and 50.');
  } else if (num <= 100) {
    console.log(num + ' is between 51 and 100.');
  } else {
    console.log(num + ' is greater than 100.');
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
numberRange('hello!');
