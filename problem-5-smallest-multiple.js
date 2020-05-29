function smallestMult(n) {
  const arr = Array(n).fill().map((_, index) => index + 1);
  return arr.reduce((acc, curr) => acc * curr/gcd(acc, curr), 1);
}

var gcd = function(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

console.log(smallestMult(5));
