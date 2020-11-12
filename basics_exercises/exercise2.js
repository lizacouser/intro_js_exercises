let myNumber = 4936;

//function to find the ones place of a number
let getOnesPlace = (number) => {
  return number % 10;
}

//function to eliminate the ones place of a number
let dropADigit = (number) => {
  return (number - getOnesPlace(number)) / 10;
}

let printIndividualDigits = (number) => {
  do{
    console.log(getOnesPlace(number));
    number = dropADigit(number);
  } while (number >= 1);
}

printIndividualDigits(myNumber);
