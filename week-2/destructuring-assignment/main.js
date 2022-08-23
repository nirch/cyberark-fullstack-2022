const fname = 'John';
const lname = 'Doe';

const person = {
  fname,
  lname,
  age: 30,
};
console.log(person);

function printPerson(person) {
  // const fname = person.fname;
  // const lname = person.lname;
  const { fname, lname } = person;

  console.log(fname, lname);
}
printPerson(person);

const nums = [12, 11, 93];
function destructtureArray(arr) {
  // const num1 = arr[0];
  // const num2 = arr[1];

  const [num1, num2] = arr;
}
