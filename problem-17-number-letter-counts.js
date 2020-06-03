function numberLetterCounts(limit) {
  // Good luck!
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += getNumberCount(i);
  }
  return sum;
}

function getNumberCount(number) {
  if (number === 1000) {
    return numberLength[1000] + numberLength[1]
  }
  let sum = 0;
  const lastTwo = number % 100;
  if (numberLength[lastTwo]) {
    sum += numberLength[lastTwo];
  } else if (lastTwo !== 0) {
    const ones = Math.floor(lastTwo % 10);
    const tens = Math.floor(lastTwo / 10) * 10;

    sum += numberLength[ones] + numberLength[tens];
  }

  const hundreds = Math.floor(number / 100) * 100;



  if (hundreds) {
    sum += numberLength[100] + numberLength[Math.floor(hundreds / 100)];
  }


  if (number > 100 && lastTwo) {
    sum += 3;
  }

  return sum;
}

const numberLength = {
  1: 3,
  2: 3,
  3: 5,
  4: 4,
  5: 4,
  6: 3,
  7: 5,
  8: 5,
  9: 4,
  10: 3,
  11: 6,
  12: 6,
  13: 8,
  14: 8,
  15: 7,
  16: 7,
  17: 9,
  18: 8,
  19: 8,
  20: 6,
  30: 6,
  40: 5,
  50: 5,
  60: 5,
  70: 7,
  80: 6,
  90: 6,
  100: 7,
  1000: 8
}

// console.log(numberLength)

console.log(numberLetterCounts(1000));
