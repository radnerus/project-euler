function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 // Good luck!

  let triplet = 0;
  for (let i = n - 2; i > 2; i--) {
    // console.log(i, n - i)
    const squareC = i * i;
    const remainingN = n - i;

    for (let j = remainingN - 1; j > 1; j--) {
      // console.log(j, remainingN - j);
      const squareA = j * j;
      const squareB = (remainingN - j) * (remainingN - j);

      // console.log('A', j, remainingN - j, i)
      // console.log('B', squareA, squareB, squareC)
      // console.log('C', squareA + squareB, squareC)
      if (squareA + squareB === squareC) {
        triplet = (j * (remainingN - j) * i);
      }
    }
  }

 return triplet;
}

console.log(specialPythagoreanTriplet(1000));
