let capitalizeLongWords = (message) => {
  if(typeof message !== 'string'){
    return 'Not a string';
  }
  if(message.length > 10){
    message = message.toUpperCase();
  }
  return message;
}

console.log(capitalizeLongWords('abcdefghij'));

/* 
alternate solution:

function capsLong(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}

*/