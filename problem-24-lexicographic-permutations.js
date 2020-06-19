function lexicographicPermutations(n) {
  n++;
  const sortedAvailableDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return +getNthLexicographicPermutation(sortedAvailableDigits, n);
}

var getNthLexicographicPermutation = function(sortedAvailableDigits, n){
    var length = sortedAvailableDigits.length;
    if(length == 1){
        return (n == 1) ? sortedAvailableDigits[0] : null;
    }
    
    var combinationsWithoutFirstDigit = 1;
    for(var i = 2; i < length; i++){
        combinationsWithoutFirstDigit *= i;
    }
    
    var firstDigitIndex = Math.floor((n-1) / combinationsWithoutFirstDigit);
    if(firstDigitIndex >= length){
        return null;
    }
    return sortedAvailableDigits.splice(firstDigitIndex, 1) + getNthLexicographicPermutation(sortedAvailableDigits, n - (firstDigitIndex * combinationsWithoutFirstDigit));
};

console.log(lexicographicPermutations(999999));
