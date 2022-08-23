function printName(fname, lname) {
  console.log(`${fname} ${lname}`);
}
printName('John', 'Doe');

const printName2 = (fname, lname) => {
  console.log(`${fname} ${lname}`);
};
printName2('Sarah', 'Doe');

setTimeout(() => {
  return console.log('Arrow Function');
}, 1000);

const numbers = [2, 56, -10];
numbers.forEach(function (number) {
  console.log(number);
});

numbers.forEach(number => console.log(number));

const person = {
  fname: 'Dave',
  sayHi: () => {
    console.log(this);
  },
};
person.sayHi();
