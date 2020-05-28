function largestPrimeFactor(number) {
  // Good luck!
  // console.log(number, checkPrime(number));
  if (checkPrime(number)) {
    return number;
  }

  let maxPrime = 1;

  if (number % 2 === 0) {
    maxPrime = 2;
    number /= 2;
  }

  for (let i = Math.floor(Math.sqrt(number / 2)); i > 1; i--) {
    if (number % i === 0 && checkPrime(i)) {
      return i;
    }
  }
  return maxPrime;
}

function checkPrime(number) {
  if (number === 2) return true;

  let count = 0;
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      count++;
      if (count > 2) {
        break;
      }
    }
  }

  return count === 2;
}


console.log(largestPrimeFactor(600851475143));
