function removeLastChar(str) {
  return str.slice(0, str.length-1);
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'