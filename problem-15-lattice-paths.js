function latticePaths(gridSize) {
  // Good luck!
  let preMatrix = [1];

  for (let i = 1; i <= gridSize; i++) {
    const arr = Array(2 * i + 1).fill();
    arr[0] = arr[arr.length - 1] = 1;
    const middle = Math.floor(arr.length / 2);
    for (let i = 1; i < middle; i++) {
      arr[i] = preMatrix[i] + arr[i - 1];
    }

    // console.log(arr)

    for ( let i = arr.length - 2; i > middle; i--) {
      // console.log(preMatrix, arr)
      arr[i] = preMatrix[i - middle] + arr[i + 1];
    }

    // console.log(arr[middle - 1], arr[middle + 1]);
    arr[middle] = arr[middle - 1] + arr[middle + 1];

    // console.log(arr);
    preMatrix = arr;
  }

  // console.log(preMatrix[Math.floor(preMatrix.length / 2)])
  return preMatrix[Math.floor(preMatrix.length / 2)];
}

console.log(latticePaths(20));
