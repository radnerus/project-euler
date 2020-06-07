function countingSundays(firstYear, lastYear) {
  // Good luck!
  let count = 0;
  for (let year = firstYear; year <= lastYear; year++) {
    for (let month = 0; month < 12; month++) {
      if (new Date(year, month, 1).getDay() === 0) {
        count++;
      }
    }
  }
  console.log(count)
  return count;
}

console.log(countingSundays(1943, 1946));
