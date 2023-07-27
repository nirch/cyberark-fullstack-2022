


function calcSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(calcSum(1000000000));



function calcSumAsync(currIndex, n, sum, doneCallback) {
    const STEP = 10000000;

    if (currIndex >= n) {
        doneCallback(sum);
        return;
    }

    for (let i = currIndex; i < currIndex + STEP && i <= n; i++) {
        sum += i;
    }

    setTimeout(() => {
        // console.log('partial result: ' + sum);
        calcSumAsync(currIndex + STEP, n, sum, doneCallback)
    }, 0)
}

calcSumAsync(1, 1000000000, 0, result => console.log(result));