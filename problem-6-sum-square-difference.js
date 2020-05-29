function sumSquareDifference(n) {
  // Good luck!
  const arr = Array(n).fill().map((_, i) => i + 1);
  const squareArr = arr.map(e => e * e);
  const squareSum = squareArr.reduce((acc, cur) => acc + cur, 0);
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum * sum - squareSum;
}

console.log(sumSquareDifference(100));
