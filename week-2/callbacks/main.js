const printEven = function (num) {
  console.log(num + ' is even');
};

const printOdd = function (num) {
  console.log(num + ' is odd');
};

const printNumber = function (number, printFunction) {
  printFunction(number);
};

const number = 6;

if (number % 2 === 0) {
  printNumber(number, printEven);
} else {
  printNumber(number, printOdd);
}

setTimeout(function () {
  console.log('hello from setTimeout');
}, 3000);

console.log('after setTimeout');

function setTimeoutSync(callback, ms) {
  let start = new Date().getTime();
  while (start + ms >= new Date().getTime()) {}
  callback();
}
setTimeoutSync(function () {
  console.log('hello from setTimeoutSync');
}, 4000);

console.log('end of script');
