let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

let contains = (str, arr) => {
  let hasElement = false;
  arr.forEach(element => {
    if (element === str) {
      hasElement = true;
      return;
    }
  })
  return hasElement;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

/* 
A BETTER SOLUTION

function contains(element, list) {
  return list.indexOf(element) >= 0;  // returns -1 if element not in array!!!
}

OR

function contains(element, list) {
  for (let i = 0; i < list.length; i++) {   // for loop is better than forEach if you need to break!!!
    if (list[i] === element) {
      return true;
    }
  }

  return false;
}

*/
