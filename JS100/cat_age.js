let catAge = humanYears => {
  let humanYearOne = 15;
  let humanYearTwo = 9;
  let otherHumanYears = 4;
  switch (humanYears) {
    case 0 : return 0;
    case 1 : return humanYearOne;
    case 2 : return humanYearOne + humanYearTwo;
    default : return humanYearOne + humanYearTwo + otherHumanYears * (humanYears - 2)
  }
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2));// 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32