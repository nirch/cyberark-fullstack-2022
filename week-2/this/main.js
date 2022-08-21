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


function sayHi3() {
    console.log(`Hi ${this.name}`);
}

let person1 = {
    name: "John",
    sayHi: function() {
        console.log(`Hi ${this.name}`)
        console.log(this);
    }
}
// document.getElementById("my-btn").onclick = person1.sayHi;
document.getElementById("my-btn").addEventListener("click", person1.sayHi)

function elementClicked(element) {
    console.log(element);
    console.log(this);      // <-- note that here this is the global scope (window)
}


person1.sayHi();
const sayHi2 = person1.sayHi;
sayHi2();


let person2 = {
    name: "Sarah"
}
person2.sayHi = sayHi3;
person2.sayHi();













