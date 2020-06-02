function longestCollatzSequence(limit) {
  // Good luck!
  let max = 0;
  let maxI = 0;
  for (let i = limit - 1; i > 0; i--) {
    const seq = getSequence(i);
    // console.log(seq, i)
    if (seq > max) {
      max = seq;
      maxI = i;
    }
  }
  return maxI;
}

function getSequence(limit) {
  let count = 1;
  while (limit !== 1) {
    // console.log(limit, count)
    if (limit % 2 === 0) {
      limit = limit / 2;
    } else {
      limit = ( 3 * limit) + 1;
    }
    count++;
  }
  return count;
}

console.log(longestCollatzSequence(5847));
