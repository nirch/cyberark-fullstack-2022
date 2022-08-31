import { foo, boo, printDayTomorrow } from './named-exports.js';
import Person from './default-export.js';
import fs from 'fs';
import http from 'http';
// import Bla, { c } from './default-export.js';
// import * as utils from './named-exports.js';

let x = 'bla';

foo();
boo();
printDayTomorrow();
// console.log(someVariable);
// console.log(this);

const p1 = new Person('John', 'Doe', 30, 'Jerusalem');
console.log(p1);

fs.writeFile('test.txt', 'Hi from node!!!', function () {
  console.log('done writing to file');
});

http
  .createServer(function (req, res) {
    res.write('<h1>Hello World!</h1>');
    res.end();
  })
  .listen(8080);
