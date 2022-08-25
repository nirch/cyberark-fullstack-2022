console.log('start');

function getStudentAge(student) {
  try {
    return student.age;
  } catch (err) {
    console.warn('student is null or undefined');
    return undefined;
  }
  //   return student.age;
}

function printStudentsAge(students) {
  students.forEach(student => {
    // try {
    //   console.log(getStudentAge(student));
    // } catch (err) {
    //   console.warn(err);
    // }
    console.log(getStudentAge(student));
  });
}

let studentsDummyInput = [
  { name: 'Koko', age: '3' },
  null,
  { name: 'Momo', age: 31 },
];

printStudentsAge(studentsDummyInput);
// try {
//   printStudentsAge(studentsDummyInput);
// } catch (err) {
//   console.warn(err);
// }

console.log('end');
