function maximumPathSumI(triangle) {
  // Good luck!
  let lastRow;
  for(let i = triangle.length - 2; i >= 0; i--) {
    const prev = triangle[i].filter(e => e);
    const next = lastRow ?? triangle[i + 1].filter(e => e);

    lastRow = prev.map((e, _i) => e + Math.max(next[_i], next[_i + 1]));
  }

  return lastRow[0];
}

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

console.log(maximumPathSumI(testTriangle));
