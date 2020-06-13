function namesScores(arr) {
  // Good luck!
  let sum = 0;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    // console.log((i + 1) * getWorth(arr[i]), sum)
    sum += (i + 1) * getWorth(arr[i]);
  }
  return sum;
}

function getWorth(str) {
  const vals = str.split('').map(c => c.charCodeAt(0) - 64);
  // console.log(vals)
  return vals.reduce((a, c) => a + c, 0);
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

// console.log(getWorth('ABC'))

console.log(namesScores(names));
