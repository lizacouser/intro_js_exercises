
let greetUser = () => {
  let rlSync = require('readline-sync');
  let firstName = rlSync.question("What is your first name? ");
  let lastName = rlSync.question("What is your last name? ");
  return(`${firstName} ${lastName}`);
}
console.log(`Hello, ${greetUser()}`); 


/* launch school proposed solution below

function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`); */