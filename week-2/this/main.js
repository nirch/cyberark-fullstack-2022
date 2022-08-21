// 'use strict'

// x = 10;
// console.log(x);

// this is root is the window object
console.log(this);

function foo() {
    console.log('inside foo');
    console.log(this);      // this in function invoked from root is window (or undefined in strict mode)
}
foo();

let person1 = {
    name: "John",
    sayHi: function() {
        console.log(`Hi ${this.name}`)
    }
}

person1.sayHi();

const y = person1.sayHi;
y();


function elementClicked(element) {
    console.log(element);
    console.log(this);      // <-- note that here this is the global scope (window)
}