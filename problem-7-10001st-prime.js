function nthPrime(n) {
  // Good luck!
  let count = 2;
  let currentNum = 2;
  let lastPrime = 3;
  while(count !== n) {
    if (currentNum % 2 !== 0 && currentNum % 3 !== 0 && isPrime(currentNum)) {
      count++;
      lastPrime = currentNum;
    }
    currentNum++;
  }
  return lastPrime;
}

function isPrime(number) {
  for(let i = Math.floor(Math.sqrt(number)); i > 1; i--) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(nthPrime(10001));
