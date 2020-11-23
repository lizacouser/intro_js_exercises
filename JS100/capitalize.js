let capitalize = str => {
  let words = str.split(' ');
  let capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}

console.log(capitalize('launch school tech & talk'));