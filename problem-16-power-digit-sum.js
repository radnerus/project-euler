function powerDigitSum(exponent) {
  // Good luck!
  let power = Math.pow(2, exponent);
  let result = 0;

  power = BigInt(power).toString();
  result = power.split('').map(Number).reduce((acc, cur) => acc + cur, 0);

  return +result;
}

console.log(powerDigitSum(128));
