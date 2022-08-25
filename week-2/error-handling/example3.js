function getStudentAge(student) {
  return student.age;
}

function printStudentsAge(students) {
  students.forEach(student => {
    try {
      let age = getStudentAge(student);
      if (age > 30) {
        console.log(studnt.name, age);
      } else {
        console.log('young', student.name, age);
      }
    } catch (err) {
      if (err instanceof TypeError) {
        console.log('student is null or undefined');
      } else {
        throw err;
      }
    }
  });
}

let students = [{ name: 'Momo', age: 21 }, { name: 'Koko', age: 35 }, null];
printStudentsAge(students);
