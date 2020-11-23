let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person = {};

nestedArray.forEach(arr => {
  person[arr[0]] = arr[1]; // person[key] = key[value]
})

console.log(person);