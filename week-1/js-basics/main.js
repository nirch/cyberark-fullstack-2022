
function foo() {
    if (false) {
        var a = 10;
    }
    console.log(a);
}

const foo2 = function() {
    console.log("foo2")
}

foo2();



let x = 10;         // ES6 (ES2015)
const y = 20;

// var oldVar = 5;


// primitives: number, string, boolean (undefined)

let a;
console.log(typeof x);
console.log(typeof a);  // undefined

a = null;                   // null is a value
console.log(typeof a);      // null is a value of type object


a = 10;
console.log(typeof a);      // number
a = "bla";
console.log(typeof a);      // string


a = 10 + 10 + "20";
console.log(a);             // "2020"

a = "20" + 10 + 10;
console.log(a);             // "201010"


// if (x == y)                 // checks only value (could be different types)
// if (x === y)                // checks both value and tyoe (like other languges) - USE THIS

5 === "5"                   // false
5 == "5"                    // true

a = 10;
console.log(a);
console.log(a.toString())


let numArr = [23, 22, -10, 5];

console.log(numArr[0]);                         // Reading the first item
console.log(numArr[numArr.length - 1]);         // Reading the last item in an array
console.log(numArr.toString());
console.log(JSON.stringify(numArr));
numArr.push(10);
numArr.unshift(1);                              // [1, 23, 22, -10, 5, 10]
console.log("after");
console.log(numArr.splice(1, 1));               // [23]
console.log(numArr);

let fname = "Bob";


// variable name can start only with letters or $ _

let person = {
    fname: 'John',
    "lname": 'Doe', // object key can be declared as a string
    age: 35,
    height: 180,
    address: {
        city: "Tel Aviv",
        zip: 322882,
    },
    sayName: function() {
        console.log(this.fname + " " + this.lname)
    },
    1: "fkkfkf",
}  

console.log(person);

person.id = "929282828";

console.log(person.fname);
console.log(person["1"]);

let key = "fname";
console.log(person[key]);

console.log(person.address.zip);

person.sayName();


let num1 = 10;
let num2 = num1;
console.log(num2);         // 10

num2 = 20;
console.log(num2);         // 20
console.log(num1);         // 10

let p1 = {
    name: "John",
    age: 25
}

let p2 = p1;
console.log(p2.age)        // 25

p2.age = 80;
console.log(p2.age)        // 80
console.log(p1.age)        // 80


const numArr2 = [30, 10, 20];
numArr2[0] = 20;    // ok
// numArr2 = [20]      // error



let person1 = {
    name: "John",
    age: 25
}
let person2 = {
    name: "Sarah",
    age: 30
}
let person3 = {
    name: "Dave",
    age: 43
}

const people = [person1, person2, person3];


let sum = 0;
for (let i = 0; i < people.length; i++) {
    sum += people[i].age;
}
console.log(sum/people.length);



// for of
sum = 0;
for (const person of people) {
    sum += person.age;
}
console.log(sum/people.length);

console.log(people);

// for in
for (const key in person1) {
    // console.log(key + ": " + person1[key]);
    console.log(`${key}: ${person1[key]}`)
}




































































