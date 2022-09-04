let myName: string = 'John';
let myNum: number = 10;
let isSomething: boolean = true;
let numNoExplicitType = 10;

// myName = 10; error
// numNoExplicitType = 'hello'; error

let numArr: number[] = [10, 20, 44];
// numArr.push('bla');  error

type Address = {
  street: string;
  city: string;
  zip: number;
};

interface PersonInterface {
  name: string;
  age: number;
  address: Address;
}

const p1: PersonInterface = {
  name: 'John',
  age: 30,
  address: {
    street: 'Hertzel 60',
    city: 'Tel Aviv',
    zip: 338282,
  },
};

console.log(p1);

function isExists(numbers: number[], num: number): boolean {
  const foundNum = numbers.find(item => item === num);
  return foundNum === num;
}

console.log(isExists([2, 44, 76, 0], 0));

// const isExists = (numbers: number[], num: number) : boolean => {

// }

class Car {
  //   brand: string;
  //   model: string;
  //   km: number;
  //   year: number;
  color: string;

  constructor(
    public brand: string,
    public model: string,
    public km: number,
    public year: number
  ) {
    this.color = 'Red';
    // this.brand = brand;
  }

  kmPerYear(): number {
    return 100;
  }
}

const car1 = new Car('Toyota', 'Corola', 20000, 2020);
console.log(car1.brand);

enum Weekday {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

console.log(Weekday.Monday);

function isSaturday(day: Weekday): boolean {
  return day === Weekday.Saturday;
}
