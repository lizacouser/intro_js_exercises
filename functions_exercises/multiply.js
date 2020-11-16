let multiply = (number1, number2) => {
  return Number(number1) * Number(number2);
}

let getInput = (prompt) => {
  let readlineSync = require('readline-sync');
  return readlineSync.question(prompt);
}

let number1 = getInput('Enter the first number: ');
let number2 = getInput('Enter the second number: ');

console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);