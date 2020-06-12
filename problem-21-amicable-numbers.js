function sumAmicableNum(n) {
  const nums = [];

  for (let i = 1; i < n ; i++) {
    const divSum = generateDivisorsSum(i);
    const divSumD = generateDivisorsSum(divSum);

    if (i === divSumD && i !== divSum && nums.indexOf(i) === -1) {
      nums.push(i, divSum)
    }
  }

  console.log(nums)

  return nums.reduce((a, c) => a + c, 0);
}

function generateDivisorsSum(number) {
  const divisors = [1];

  for(let i = Math.floor(Math.sqrt(number)); i > 1; i--) {
    if (number % i === 0) {
      if (number / i === i) {
        divisors.push(i);
      } else {
        divisors.push(i, number / i)
      }
    }
  }

  return divisors.sort((a, b) => a - b).reduce((a, c) => a + c, 0);
}

console.log(sumAmicableNum(10000));
