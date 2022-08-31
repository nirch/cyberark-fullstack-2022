// const moment = require('moment'); // Before ES5 Syntax (CommonJS)
import moment from 'moment'; // ES5 and after syntax (Module)

let someVariable = 10;

const numbers = [12, 33, 4];

const foo = function () {
  console.log('foo');
};

const boo = function () {
  let x = 10;
  console.log('boo', x);
};

const printDayTomorrow = function () {
  console.log(moment().add(1, 'days').format('dddd'));
};

export { foo, boo, printDayTomorrow, numbers };
