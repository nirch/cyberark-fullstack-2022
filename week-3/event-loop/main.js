function onSetTimeout() {
  console.log('start onSetTimeout');

  setTimeout(() => {
    console.log('hi from timeout');
  }, 10000);

  calcSum(4000000000);

  console.log('end onSetTimeout');
}

function calcSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  console.log('sum = ' + sum);
}

function calcSumAsync(currIndexStart, sum, callback) {
  const STEP = 10000000;
  const STOP = 1000000000;

  for (let i = currIndexStart; i < currIndexStart + STEP && i < STOP; i++) {
    sum += i;
  }

  if (currIndexStart + STEP >= STOP) {
    callback(sum);
  } else {
    setTimeout(() => {
      calcSumAsync(currIndexStart + STEP, sum, callback);
    }, 0);
  }
}

function onBlockingCode() {
  //   setTimeout(calcSum, 0, n);

  calcSumAsync(0, 0, sum => {
    console.log(sum);
  });
}

function onPrint() {
  console.log('print');
}
