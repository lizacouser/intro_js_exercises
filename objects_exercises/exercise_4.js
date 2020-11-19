/* 
Create an array from the keys of the 
object obj below, with all of the keys 
converted to uppercase. Your implementation 
must not mutate obj.
*/

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objArray = [];
for(let key in obj){
  if (obj.hasOwnProperty(key)) {
    objArray.push(key.toUpperCase());
  }
}

console.log(objArray);

//OR ALTERNATIVELY

let objArray2 = Object.keys(obj);
objArray2 = objArray.map(key => key.toUpperCase());

console.log(objArray2);