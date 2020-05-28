function largestPalindromeProduct(n) {
  // Good luck!
  const max = Number(String(9).repeat(n));
  const min = Number('9' + String(0).repeat(n - 1));
  const palindromes = [];

  for (let i = max; i > min; i--) {
    for (let j = max; j >= min; j--) {
      const multiple = i * j;
      if (checkPalindrome(multiple)) {
        return multiple;
      }
    }
  }
  return false;
}

function checkPalindrome(number) {
  const str = String(number);
  return str === str.split('').reverse().join('');
}

console.log(largestPalindromeProduct(3));
