/*  
we're again interested in even numbers, 
but this time the numbers are in nested arrays 
in a single outer array.  
*/


let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(innerArray => {
  innerArray.forEach(num => {
    if(num % 2 === 0){
      console.log(num);
    }
  });
});

/*
or if we wanted to return the arrays:

let evensArray = [];
for (let i = 0; i < myArray.length; i ++){
  let innerEvensArray = myArray[i].filter(num => num % 2 === 0);
  evensArray[i] = innerEvensArray;
}

console.log(evensArray);

*/