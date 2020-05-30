function largeSum(arr) {
  // Good luck!
  const sum = String(arr.reduce((acc, cur) => acc + +cur, 0));
  return  +sum.substring(0, 11).replace('.', '');
}

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

console.log(largeSum(testNums));
