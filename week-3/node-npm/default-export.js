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

export const c = 10;

export default Person;
