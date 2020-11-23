let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33,
};

let personArray = [];
for (let key in person) {
  personArray.push([key, person[key]]);
}

console.log(personArray);


/* 
a better solution

let nestedArray = Object.entries(person); 

***Object.entries() returns an array of object key/value pairs***

*/