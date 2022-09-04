"use strict";
let myName = 'John';
let myNum = 10;
let isSomething = true;
let numNoExplicitType = 10;
// myName = 10; error
// numNoExplicitType = 'hello'; error
let numArr = [10, 20, 44];
const p1 = {
    name: 'John',
    age: 30,
    address: {
        street: 'Hertzel 60',
        city: 'Tel Aviv',
        zip: 338282,
    },
};
console.log(p1);
function isExists(numbers, num) {
    const foundNum = numbers.find(item => item === num);
    return foundNum === num;
}
console.log(isExists([2, 44, 76, 0], 0));
// const isExists = (numbers: number[], num: number) : boolean => {
// }
class Car {
    constructor(brand, model, km, year) {
        this.brand = brand;
        this.model = model;
        this.km = km;
        this.year = year;
        this.color = 'Red';
        // this.brand = brand;
    }
    kmPerYear() {
        return 100;
    }
}
const car1 = new Car('Toyota', 'Corola', 20000, 2020);
console.log(car1.brand);
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Sunday"] = 1] = "Sunday";
    Weekday[Weekday["Monday"] = 2] = "Monday";
    Weekday[Weekday["Tuesday"] = 3] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 4] = "Wednesday";
    Weekday[Weekday["Thursday"] = 5] = "Thursday";
    Weekday[Weekday["Friday"] = 6] = "Friday";
    Weekday[Weekday["Saturday"] = 7] = "Saturday";
})(Weekday || (Weekday = {}));
console.log(Weekday.Monday);
function isSaturday(day) {
    return day === Weekday.Saturday;
}
//# sourceMappingURL=main.js.map