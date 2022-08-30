let person1 = {
  fname: 'John',
  lname: 'Doe',
  age: 30,
  city: 'Jerusalem',
  fullName: function () {
    return `${this.fname} ${this.lname}`;
  },
};

console.log(person1.fname);
console.log(person1.fullName());

let person2 = {
  fname: 'Sarah',
  lname: 'Doe',
  age: 25,
  city: 'Tel Aviv',
  fullName: function () {
    return `${this.fname} ${this.lname}`;
  },
};

class Person {
  constructor(fname, lname, age, city) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.city = city;
    this.children = [];
    // this.fullName = this.fullName.bind(this);
  }

  fullName = () => {
    console.log(`Hi ${this.fname} ${this.lname}`);
    return `${this.fname} ${this.lname}`;
  };
}

const p1 = new Person('John', 'Doe', 30, 'Jerusalem');
const p2 = new Person('Sarah', 'Doe', 25, 'Tel Aviv');

console.log(p1.fname);
console.log(p2.fullName());

console.log(person1);
console.log(p1);

console.log(person1 instanceof Person); // fasle
console.log(p1 instanceof Person); // true
// const p2 = new Person(p1);

setTimeout(p1.fullName, 1000);

class Counter {
  #counter;
  constructor() {
    this.#counter = 0;
  }

  increase() {
    this.#counter++;
  }

  decrease() {
    this.#counter--;
  }

  value() {
    return this.#counter;
  }
}

const myCounter = new Counter();
myCounter.increase();
myCounter.increase();
myCounter.increase();
// myCounter.counter += 10;
console.log(myCounter.value());

const myCounter2 = new Counter();
myCounter.decrease();
console.log(myCounter2.value()); // -1

class Student extends Person {
  constructor(fname, lname, age, city, grades) {
    super(fname, lname, age, city);
    this.grades = grades;
  }

  gradesAvg() {}
}
