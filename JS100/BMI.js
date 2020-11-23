function calculateBMI(heightCm, weightKg) {
  let heightM = heightCm / 100;
  return weightKg / heightM ** 2;
}

console.log(calculateBMI(180, 80)); // "24.69"