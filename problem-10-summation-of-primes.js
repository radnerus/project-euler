function primeSummation(n) {
  // Good luck!
  let currentNum = 2;
  let lastPrime = 3;
  let sum = 5;
  while(currentNum < n) {
    if (currentNum % 2 !== 0 && currentNum % 3 !== 0 && isPrime(currentNum)) {
      lastPrime = currentNum;
      sum += currentNum;
    }
    currentNum++;
  }
  return sum;
}

function isPrime(number) {
  for(let i = Math.floor(Math.sqrt(number)); i > 1; i--) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeSummation(2000000));
