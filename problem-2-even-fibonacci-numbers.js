function fiboEvenSum(n) {
  // You can do it!
  let prev = 1;
  let current = 1;
  let sum = 0;
  let count = 4;
  while (current < n) {
    const next = prev + current;
    if (next % 2 === 0) {
      sum += next;
    }
    [prev, current] = [current, next];
    count++;
  }
  return sum;
}

console.log(fiboEvenSum(4000000));
