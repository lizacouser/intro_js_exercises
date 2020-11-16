function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let lastResult = 1;
for (let i = 1; i <= 5; i++) {
  lastResult = times(lastResult, i);
}

/* 

proposed solutions:

(a)
let oneFactorial = times(1, 1);
let twoFactorial = times(2, oneFactorial);
let threeFactorial = times(3, twoFactorial);
let fourFactorial = times(4, threeFactorial);
let fiveFactorial = times(5, fourFactorial);


(b)
times(times(times(times(times(1, 1), 2), 3), 4), 5);


*/