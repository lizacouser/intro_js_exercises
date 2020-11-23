let compareByLength = (str1, str2) => {
  length1 = str1.length;
  length2 = str2.length;
  if (length1 > length2) {
    return 1;
  } else if (length1 < length2) {
    return -1;
  } else {
    return 0;
  }
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity')); // 1
console.log(compareByLength('humor', 'grace')); // 0
