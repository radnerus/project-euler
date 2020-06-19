function digitFibonacci(n) {
    // Good luck!
    let prev = BigInt(1);
    let cur = BigInt(1);
    let count = 2;
    while (cur.toString().length < n) {
        const fibCur = prev + cur;
        prev = cur;
        cur = fibCur;
        count++;
    }
    return count;
}

console.log(digitFibonacci(20));