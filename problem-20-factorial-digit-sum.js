function sumFactorialDigits(n) {
  let factorial = BigInt(getFactorial(n)).toString();

  return factorial.split('').reduce((acc, cur) => acc + +cur, 0);
}

function getFactorial(number) {
  number = BigInt(number);
  let factorial = BigInt(1);
  while(number > 1) {
    factorial *= BigInt(number);
    number--;
  }

  return factorial;
}

console.log(sumFactorialDigits(100));
