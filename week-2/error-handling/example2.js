console.log('start');

function getStudentAge(student) {
  return student.age;
}

function printStudentsAge(students) {
  students.forEach(student => {
    try {
      console.log(student.name, getStudentAge(student));
    } catch (err) {
      if (err instanceof ReferenceError) {
        throw err;
        // console.error('student variable is not defined correctly');
      } else if (err instanceof TypeError) {
        console.warn('student is null or undefined');
      } else {
        console.error(err);
      }
    }
  });
}

let students = [{ name: 'Koko', age: 25 }, null, { name: 'Momo', age: 31 }];
try {
  printStudentsAge(students);
} catch (err) {
  console.error(err);
}

console.log('end');
