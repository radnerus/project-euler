function divisibleTriangleNumber(n) {
  // Good luck!
  let count = 0;
  let iteration = 1;
  let sum;
  while (count < n) {
    // console.log(Array(iteration).fill().map((_, i) => i + 1))
    sum = Array(iteration).fill().map((_, i) => i + 1).reduce((acc, cur) => acc + cur, 0);
    // console.log(sum)
    const divisors = generateDivisors(sum);
    count = divisors.length;
    iteration++;
  }
  return sum;
}

function generateDivisors(number) {
  const divisors = [];

  for(let i = Math.floor(Math.sqrt(number)); i > 0; i--) {
    if (number % i === 0) {
      if (number / i === i) {
        divisors.push(i);
      } else {
        divisors.push(i, number / i)
      }
    }
  }

  return divisors.sort((a, b) => a - b);
}

// console.log(generateDivisors(100));

console.log(divisibleTriangleNumber(167));
