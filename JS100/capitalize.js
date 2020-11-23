let capitalize = str => {
  let words = str.split(' ');
  let capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
  // note to self: you need slice because .toUpperCase() is non mutating. just returns a different string. you can't just change one letter unless i think you could do a replace.
  return capitalizedWords.join(' ');
}

console.log(capitalize('launch school tech & talk'));


//trying again with a string.replace()!! it works because it'll grab the first instance of the letter it wants to replace, so that will always be just the first letter
let capitalize2 = str => {
  let words = str.split(' ');
  let capitalizedWords = words.map(word => {
    return word.replace(word[0], word[0].toUpperCase());
  });
  return capitalizedWords.join(' ');
}

console.log(capitalize2('launch schools tech & talk'));